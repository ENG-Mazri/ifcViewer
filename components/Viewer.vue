<template>
    <div class="viewer">
        <canvas id="three-canvas"></canvas>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted } from 'vue'
import {
    AmbientLight,
    AxesHelper,
    DirectionalLight,
    GridHelper,
    PerspectiveCamera,
    OrthographicCamera,
    Scene,
    WebGLRenderer,
    Quaternion,
    DoubleSide,
    Vector3
  } from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import * as THREE from "three";

import { acceleratedRaycast, computeBoundsTree, disposeBoundsTree } from "three-mesh-bvh";

import { IFCLoader } from "web-ifc-three/IFCLoader";

onMounted(() => {
    const scene = new Scene();

    const mouse = new THREE.Vector2();

    const size = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    const fov = 45;
    const aspect = 2;
    const near = 0.1;
    const far = 1000;
    const camera = new PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(-30, 30, 110);
    camera.up.set(0, 1, 0);
    camera.lookAt(0, 0, 0);

    const lightColor = 0xffffff;

    const ambientLight = new AmbientLight(lightColor, 0.5);
    scene.add(ambientLight);

    const directionalLight = new DirectionalLight(lightColor, 1);
    directionalLight.position.set(0, 10, 0);
    directionalLight.target.position.set(-5, 0, 0);
    scene.add(directionalLight);
    scene.add(directionalLight.target);

    const threeCanvas = document.getElementById("three-canvas");
    const renderer = new WebGLRenderer({
        canvas: threeCanvas,
        alpha: true,
        antialias: true,
        logarithmicDepthBuffer:true
    });

    const grid = new GridHelper(50, 30);
    // scene.add(grid);

    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    const controls = new OrbitControls(camera, threeCanvas);

    const ifcLoader = new IFCLoader();
    ifcLoader.ifcManager.setWasmPath("../wasm/");
    const createFile = async (path, name, type) =>{
        let response = await fetch(path);
        let data = await response.blob();
        let metadata = {type};
        const file = new File([data], name, metadata);
        return URL.createObjectURL(file);

    }
    (async()=>{
    await createFile('/RAC_basic_sample_project.ifc', 'file.ifc', 'application/x-step')
        .then((file) => {
            ifcLoader.load(
            file,
            (ifcModel) => {
                // ifcModels.push(ifcModel)
                console.log("IFC MODEL...", ifcModel)
                scene.add(ifcModel)
            })

        });
    })();

    const animate = () => {
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", () => {
        size.width = window.innerWidth;
        size.height = window.innerHeight;
        camera.aspect = size.width / size.height;
        camera.updateProjectionMatrix();
        renderer.setSize(size.width, size.height);
    });


})

</script>

<style scoped>
.viewer{
    background-color: #cce6ff; 
    position: absolute;
    height: 100vh;
    width: 100vw;
    top:0px;
    left:0px;
    padding-right: 0px !important;
}
#three-canvas{
    position: relative;
    height: 100%;
    width: 100%;
}
</style>
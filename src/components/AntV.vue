<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import { Scene } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
import { ThreeLayer, ThreeRender } from "@antv/l7-three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
export default {
  mounted() {
    const scene = new Scene({
      id: "map",
      map: new GaodeMap({
        viewMode: "3D",
        center: [110.770672, 34.159869],
        pitch: 45,
        token: "a63cd155fbba19a5a6f02dea3c462189",
      }),
    });
    scene.on("loaded", () => {
      scene.registerRenderService(ThreeRender);
      const threeJSLayer = new ThreeLayer({
        enableMultiPassRenderer: false,
        onAddMeshes: (threeScene, layer) => {
          threeScene.add(new THREE.AmbientLight(0xffffff));
          // const sunlight = new THREE.DirectionalLight(0xffffff, 0.25);
          // sunlight.position.set(0, 80000000, 100000000);
          // sunlight.matrixWorldNeedsUpdate = true;
          // threeScene.add(sunlight);
          const center = scene.getCenter();
          // const cubeGeometry = new THREE.BoxBufferGeometry(10000, 10000, 10000);
          // const cubeMaterial = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
          // const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
          // layer.setObjectLngLat(cube, [center.lng + 0.05, center.lat], 0);
          // threeScene.add(cube);
          // 使用 Three.js glTFLoader 加载模型
          // const url = "https://gw.alipayobjects.com/os/bmw-prod/3ca0a546-92d8-4ba0-a89c-017c218d5bea.gltf";
          const url = "/Horse.glb";
          const loader = new GLTFLoader();
          loader.load(url, (gltf) => {
            // 根据 GeoJSON 数据放置模型
            const gltfScene = gltf.scene;

            this.setMaterial(gltfScene);
            layer.adjustMeshToMap(gltfScene);
            layer.setMeshScale(gltfScene, 1000, 1000, 1000);
            // const animations = gltf.animations;
            // if (animations && animations.length) {
            //     const mixer = new THREE.AnimationMixer(gltfScene);
            //     const animation = animations[0];
            //     const action = mixer.clipAction(animation);
            //     action.play();
            //     layer.addAnimateMixer(mixer);
            // }
            layer.setObjectLngLat(
              gltfScene,
              [center.lng + 0.05, center.lat],
              0
            );
            // 向场景中添加模型
            threeScene.add(gltfScene);
            // });
            // 重绘图层
            layer.render();
            console.log(gltfScene);
          });
        },
      }).animate(true);
      scene.addLayer(threeJSLayer);
    });
  },
  methods: {
    setMaterial(model) {
      if (model.children.length && model.children.length > 0) {
        model.children.map((child) => this.setMaterial(child));
      } else if (model.material) {
        model.material.wireframe = false;
        model.material.opacity = 0.9;
      }
    },
  },
};
</script>

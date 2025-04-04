// Create Babylon.js Scene
const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

// Add Camera & Light
const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2.5, 5, BABYLON.Vector3.Zero(), scene);
camera.attachControl(canvas, true);
const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

// Load 3D Model from GitHub Pages
BABYLON.SceneLoader.ImportMesh(
    "", 
    "https://your-username.github.io/3d-model-viewer/",  // Change to your GitHub Pages URL
    "model.glb", 
    scene,
    function (meshes) {
        console.log("Model loaded!");
    }
);

engine.runRenderLoop(() => scene.render());
window.addEventListener("resize", () => engine.resize());

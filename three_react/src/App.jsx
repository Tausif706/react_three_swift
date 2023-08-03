// import { useState } from 'react' 
import { useEffect } from 'react'
// import logo from './logo.svg';

import * as THREE from 'three'
import gsap from "gsap"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  useEffect(() => {
    // const scene = new THREE. Scene();

    // const camera = new THREE.PerspectiveCamera(
    //   50,
    //   window.innerWidth / window.innerHeight,
    //   1,
    //   1000
    // );
    // camera.position.z = 96 ;

    // const canvas = document.getElementById('myThreeJsCanvas');
    // const renderer = new THREE.WebGL1Renderer({
    //   canvas,
    //   antialias: true,
    // });
    // renderer.setSize(window.innerWidth , window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    // // const ambientLight = new THREE.AmbientLight(0xffffff,0.2);
    // // ambientLight.castShadow = true;
    // // scene.add(ambientLight);

    // // const spotLight = new THREE.SpotLight(0xffffff,0.4);
    // // spotLight.castShadow = true;
    // // spotLight.position.set(1,32,16);
    // // scene.add(spotLight);

    // const light = new THREE.PointLight(0xffffff,1,1000);
    // light.position.set(1,10,10)
    // scene.add(light)

    // // const boxGeometry = new THREE.BoxGeometry(16,16,16);
    // // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxGeometry = new THREE.SphereGeometry(15,64,64);
    // const boxMaterial = new THREE.MeshStandardMaterial({
    //   color: '#00ff64',
    // })
    // const boxMesh = new THREE.Mesh(boxGeometry,boxMaterial);
    // scene.add(boxMesh);

    //Scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xdddddd)
      //Create a Sphere
      // const geometry = new THREE.SphereGeometry(3,64,64);
      // var textureLoader = new THREE.TextureLoader();
      // var texture = textureLoader.load('./src/background.jpg');
      // const material = new THREE.MeshBasicMaterial({
      //     map: texture
      //     // color:0x00ff64
      // })
      // const mesh = new THREE.Mesh(geometry,material);
      // scene.add(mesh);
      //Camera
      const camera = new THREE.PerspectiveCamera(45,800/600)
      camera.position.z = 20


      // let hlight = new THREE.AmbientLight(0x404040,100);
      // scene.add(hlight)

      let directionLight = new THREE.DirectionalLight(0xffffff,1)
      directionLight.position.set(2,2,5);
      directionLight.castShadow = true; 
      scene.add(directionLight);


      // //Light
      // let light = new THREE.PointLight(0xc4c4c4,10);
      // light.position.set(0,300,500)
      // scene.add(light)

      let light2 = new THREE.PointLight(0xc4c4c4,10);
      light2.position.set(500,100,0)
      scene.add(light2)

      let light3 = new THREE.PointLight(0xc4c4c4,10);
      light3.position.set(0,100,-500)
      scene.add(light3)

      // let light4 = new THREE.PointLight(0xc4c4c4,10);
      // light4.position.set(-500,300,0)
      // scene.add(light4)
       //Render
       const canvas = document.getElementById('myThreeJsCanvas');
       const renderer = new THREE.WebGL1Renderer({
         canvas:canvas,
        //  antialias: true,
     });
     renderer.setSize(800,600)
    //  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
     renderer.shadowMap.enabled = true
     renderer.gammaOutput = true
      let root;
      const gltfLoader = new GLTFLoader();
      const url = './GLTF_SEPARATE/Intergalactic_Spaceships_Version_2.gltf';
      gltfLoader.load(url, function(gltf)  {
        root = gltf.scene; 
        scene.add(root);
        renderer.render(scene,camera)
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    });
      

      const material = new THREE.MeshBasicMaterial({
          // map: texture
          // color:0x00ff64
      })
      const mesh = new THREE.Mesh(root,material);
      scene.add(mesh);

      
      

      
      // scene.add(camera)

     
   

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true
    controls.enablePan = false
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 1.5
    

    const animat = gsap.fromTo(mesh.scale, { x: 0, y: 0, z: 0 },{x: 1, y: 1, z: 1, duration: 1.5 });

    // Define the GSAP animation
    window.addEventListener('mouseover',() => {
      animat.play();
    })

    // Define the GSAP animation
    window.addEventListener('mouseleave',() => {
      animat.reverse();
    })
    

    // Add the onmouseenter event to trigger the animation
    // mesh.onmouseenter = () => {
    //   animation.play();
    // };

    // // Add the onmouseleave event to reverse the animation
    // mesh.onmouseleave = () => {
    //   animation.reverse();
    // };

    const animate = () => {
      // boxMesh.rotation.x += 0.01;
      // boxMesh.rotation.y += 0.01;
      // mesh.position.x += 0.04
      controls.update();
      renderer.render(scene,camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  },[]);

  return (
    <div className="App">
      <canvas id='myThreeJsCanvas' />
      <div className='MenuBar'>
                <ul className='Menu'>
                    <li>
                        Home
                        <i className='fa fa-chevron-down' ></i>
                    </li>
                    <li>
                        Pages
                        <i className='fa fa-chevron-down' ></i>
                    </li>
                    <li>
                        Blog
                        <i className='fa fa-chevron-down' ></i>
                    </li>
                    <li>
                        Portfolio
                        <i className='fa fa-chevron-down' ></i>
                    </li>
                    <li>
                        Shop
                        <i className='fa fa-chevron-down' ></i>
                    </li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='Options'>
                <a href='#'><i className='fa fa-shopping-cart'></i></a>
                <a href='#'><i className='fa fa-search'></i></a>
                <a href='#'><i className='fa fa-bars' ></i></a>
            </div>
    </div>
  )
}

export default App

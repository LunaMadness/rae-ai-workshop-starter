// ------------------------------------------------
// Project Name: Ignite - Portfolio and Landing Page Template
// Project Description: Ignite - functional and beautifully designed portfolio and landing page template to kick-start your project
// Tags: mix_design, coming soon, under construction, template, landing page, portfolio, one page, responsive, html5, css3, creative, clean, agency, personal page
// Version: 1.0.3
// Build Date: May 2023
// Last Update: July 2025
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design
// File name: custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Loading Animation
//  2. Typed.js Plugin Settings
//  3. Swiper Slider
//  4. Magnific Popup Video
//  5. KBW-Countdown
//  6. Vegas Kenburns
//  7. Skillbars
//  8. Mailchimp Notify Form
//  9. Say Hello Form
//  10. ParticlesJS Background
//  11. Three.js Data-Driven Cube (NEW)
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

    "use strict";

    // 1. Loader & Loading Animation
    $(".loader__logo").addClass('scaleOut');

    setTimeout(function(){
        $(".loader").addClass('loaded');
        $("#main").addClass('active animate-in');
        $('#home-trigger').addClass('active-link');
    }, 300);

    setTimeout(function(){
        $("body").addClass('loaded');
    }, 1400);

    // 2. Typed.js Plugin Settings
    var animatedHeadline = $(".animated-headline");
    if(animatedHeadline.length){
        var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            loop: true,
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 2500
        });
    }

});

$(function() {

    "use strict";

    // 3. Swiper Slider
    var swiper = new Swiper('.swiper', {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        parallax: true,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 4. Magnific Popup Video
    $('#showreel-trigger').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        callbacks: {
            beforeOpen: function() { $('body').addClass('overflow-hidden'); },
            close: function() { $('body').removeClass('overflow-hidden'); }
        }
    });

    // 5. KBW-Countdown
    $('#countdown').countdown({until: $.countdown.UTCDate(+10, 2025, 10, 20), format: 'D'});

    // 6. Vegas Kenburns
    var bgndKenburns = $('#bgndKenburns');
    if(bgndKenburns.length){
        bgndKenburns.vegas({
            timer: false,
            delay: 8000,
            transition: 'fade2',
            transitionDuration: 2000,
            slides: [
                { src: "https://dummyimage.com/960x1080/4d4d4d/636363" },
                { src: "https://dummyimage.com/960x1080/4d4d4d/636363" },
                { src: "https://dummyimage.com/960x1080/4d4d4d/636363" }
            ],
            animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
        });
    }

    var bgndKenburnsFull = $('#bgndKenburnsFull');
    if(bgndKenburnsFull.length){
        bgndKenburnsFull.vegas({
            timer: false,
            delay: 8000,
            transition: 'fade2',
            transitionDuration: 2000,
            slides: [
                { src: "https://dummyimage.com/1920x1080/4d4d4d/636363" },
                { src: "https://dummyimage.com/1920x1080/4d4d4d/636363" },
                { src: "https://dummyimage.com/1920x1080/4d4d4d/636363" }
            ],
            animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
        });
    }

    // 7. Skillbars Settings
    $('.skillbar').skillBars({
        from: 0,
        speed: 4000,
        interval: 100,
    });

    // 8. Mailchimp Notify Form
    $('.notify-form').ajaxChimp({
        callback: mailchimpCallback,
        url: 'https://club.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900&amp;f_id=00b64ae4f0'
    });

    function mailchimpCallback(resp) {
        if(resp.result === 'success') {
            $('.notify').find('.form').addClass('is-hidden');
            $('.notify').find('.subscription-ok').addClass('is-visible');
            setTimeout(function() {
                $('.notify').find('.subscription-ok').removeClass('is-visible');
                $('.notify').find('.form').delay(300).removeClass('is-hidden');
                $('.notify-form').trigger("reset");
            }, 5000);
        } else if(resp.result === 'error') {
            $('.notify').find('.form').addClass('is-hidden');
            $('.notify').find('.subscription-error').addClass('is-visible');
            setTimeout(function() {
                $('.notify').find('.subscription-error').removeClass('is-visible');
                $('.notify').find('.form').delay(300).removeClass('is-hidden');
                $('.notify-form').trigger("reset");
            }, 5000);
        }
    };

    // 9. Say Hello Form
    $("#sayhello-form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            $('.sayhello').find('.form').addClass('is-hidden');
            $('.sayhello').find('.reply-group').addClass('is-visible');
            setTimeout(function() {
                $('.sayhello').find('.reply-group').removeClass('is-visible');
                $('.sayhello').find('.form').delay(300).removeClass('is-hidden');
                th.trigger("reset");
            }, 5000);
        });
        return false;
    });

    // 10. ParticlesJS Background
    var bgndTriangles = $('#triangles-js');
    if (bgndTriangles.length) {
        particlesJS('triangles-js', {
            "particles": { "number": { "value": 33, "density": { "enable": true, "value_area": 1420.4657549380909 } }, "color": { "value": "#3f00ff" }, "shape": { "type": "triangle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.06313181133058181, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 11.83721462448409, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
    };
});

// --------------------------------------------- //
// 11. Three.js Data-Driven Cube Start
// --------------------------------------------- //
(function() {
    'use strict';

    // 確保 three.js 庫和 canvas 元素都存在
    if (typeof THREE === 'undefined' || !document.getElementById('three-canvas')) {
        console.error('Three.js library or canvas element #three-canvas is missing.');
        return;
    }

    // A. 作用域變量定義
    let scene, camera, renderer, cube, pointLight, clock;
    let originalPositions; // 用於存儲幾何體原始頂點信息
    let mouseX = 0, mouseY = 0;

    // 天氣數據變量，並給予合理的默認值
    let currentTemperature = 15.0; // 默認溫度 15°C
    let currentWindSpeed = 10.0;   // 默認風速 10 km/h

    // B. 輔助函數：將一個範圍內的數值映射到另一個範圍
    function mapRange(value, inMin, inMax, outMin, outMax) {
        return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

    // C. 數據獲取
    async function fetchWeatherData() {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=53.80&longitude=-1.55&current=temperature_2m,wind_speed_10m';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            // 更新天氣數據變量
            if (data && data.current) {
                currentTemperature = data.current.temperature_2m;
                currentWindSpeed = data.current.wind_speed_10m;
                // console.log(`Data updated: Temp: ${currentTemperature}°C, Wind: ${currentWindSpeed} km/h`);
            }
        } catch (error) {
            console.error("Could not fetch weather data:", error);
        }
    }

    // D. Three.js 初始化函數
    function init() {
        // 場景, 相機和渲染器
        const canvas = document.getElementById('three-canvas');
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        clock = new THREE.Clock();

        // 光源
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 環境光
        scene.add(ambientLight);

        pointLight = new THREE.PointLight(0xffffff, 1); // 點光源
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // 幾何體和材質
        const geometry = new THREE.BoxGeometry(2, 2, 2, 10, 10, 10); // 增加分段以獲得更平滑的形變

        // 存儲原始頂點位置的副本，用於形變計算
        originalPositions = Float32Array.from(geometry.attributes.position.array);

        // 使用 MeshStandardMaterial
        const material = new THREE.MeshStandardMaterial({
            color: 0x00ffff, // 初始顏色
            metalness: 0.1,
            roughness: 0.5
        });

        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // 監聽事件
        window.addEventListener('resize', onWindowResize, false);
        window.addEventListener('mousemove', onMouseMove, false);

        // 啟動數據獲取和動畫
        fetchWeatherData(); // 立即獲取一次初始數據
        setInterval(fetchWeatherData, 10 * 60 * 1000); // 每 10 分鐘刷新一次

        animate(); // 啟動動畫循環
    }

    // E. 事件處理函數
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    function onMouseMove(event) {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    // F. 動畫循環
    function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // --- 數據驅動視覺效果 ---

        // 1. 根據風速改變顏色 (藍 -> 紅)
        // 將風速 0-50 km/h 映射到 HSL 色相 0.7 (藍) 到 0.0 (紅)
        const hue = mapRange(currentWindSpeed, 0, 50, 0.7, 0.0);
        cube.material.color.setHSL(hue, 1.0, 0.5);

        // 2. 根據溫度改變形態
        const tempFactor = mapRange(currentTemperature, -5, 30, 0.0, 0.4); // 將溫度 -5°C 到 30°C 映射到形變幅度
        const positions = cube.geometry.attributes.position.array;

        for (let i = 0; i < positions.length; i += 3) {
            const ox = originalPositions[i];
            const oy = originalPositions[i + 1];
            const oz = originalPositions[i + 2];

            const noise = tempFactor * (
                Math.sin(ox * 2 + elapsedTime) +
                Math.sin(oy * 2 + elapsedTime) +
                Math.sin(oz * 2 + elapsedTime)
            );

            positions[i] = ox + noise;
            positions[i+1] = oy + noise;
            positions[i+2] = oz + noise;
        }
        cube.geometry.attributes.position.needsUpdate = true; // 必須設置為 true 來應用頂點更改

        // --- 保留鼠標交互 ---
        const rotationY_speed = mouseX * 0.02;
        const rotationX_speed = mouseY * 0.02;

        cube.rotation.y += 0.005 + rotationY_speed;
        cube.rotation.x += 0.005 + rotationX_speed;

        // 渲染
        renderer.render(scene, camera);
    }

    // 啟動
    init();

})();
// --------------------------------------------- //
// Three.js Data-Driven Cube End
// --------------------------------------------- //

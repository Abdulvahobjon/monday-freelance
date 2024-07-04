document.addEventListener('DOMContentLoaded', function () {
    const staticToggle1 = document.getElementById('static_toggle_1');
    const staticInfo1 = document.getElementById('static_info_1');
    const svgContainers1 = document.querySelectorAll('.svg-container-1');

    const staticToggle2 = document.getElementById('static_toggle_2');
    const staticInfo2 = document.getElementById('static_info_2');
    const svgContainers2 = document.querySelectorAll('.svg-container-2');

    staticToggle1.addEventListener('click', function () {
        if (staticInfo1.classList.contains('max-h-0')) {
            staticInfo1.classList.remove('max-h-0', 'hidden');
            staticInfo1.classList.add('max-h-[1000px]', 'p-6', 'mt-2.5');
            svgContainers1.forEach(container => container.classList.add('rotate-180'));
            startAnimations();
        } else {
            staticInfo1.classList.remove('max-h-[1000px]', 'p-6', 'mt-2.5');
            staticInfo1.classList.add('max-h-0');
            svgContainers1.forEach(container => container.classList.remove('rotate-180'));
        }
    });

    staticToggle2.addEventListener('click', function () {
        if (staticInfo2.classList.contains('max-h-0')) {
            staticInfo2.classList.remove('max-h-0', 'hidden');
            staticInfo2.classList.add('max-h-[1000px]', 'p-0', 'mt-2.5');
            svgContainers2.forEach(container => container.classList.add('rotate-180'));
            startAnimations();
        } else {
            staticInfo2.classList.remove('max-h-[1000px]', 'p-6', 'mt-2.5');
            staticInfo2.classList.add('max-h-0');
            svgContainers2.forEach(container => container.classList.remove('rotate-180'));
        }
    });
});




function startAnimations() {
    const progressBars = document.querySelectorAll('.circular-progress');

    progressBars.forEach(progressBar => {
        const progressCircle = progressBar.querySelector('circle:nth-child(2)');
        const progressText = progressBar.querySelector('.circular-progress-text');
        const radius = progressCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const percentage = progressBar.getAttribute('data-percentage');

        progressCircle.style.strokeDasharray = `${circumference}`;
        progressCircle.style.strokeDashoffset = `${circumference}`;

        function setProgress(percent) {
            const offset = circumference - percent / 100 * circumference;
            progressCircle.style.strokeDashoffset = offset;
            progressText.innerHTML = `${percent}<span class="text-[#B7C3D6] font-medium text-3xl">%</span>`;
        }

        setProgress(0);

        let progress = 0;
        const interval = setInterval(() => {
            if (progress <= percentage) {
                setProgress(progress);
                progress += 1;
            } else {
                clearInterval(interval);
            }
        }, 20);
    });

    const percentageElement = document.getElementById('long_bar-percentage');
    const barElement = document.getElementById('long__bar');
    const targetPercentage = 85;
    const animationDuration = 2000;
    const stepTime = Math.abs(Math.floor(animationDuration / targetPercentage));
    let currentPercentage = 0;

    function updatePercentage() {
        percentageElement.innerHTML = `${currentPercentage}<span class="text-[#B7C3D6] font-medium">%</span>`;
        barElement.style.width = `${currentPercentage}%`;

        if (currentPercentage < targetPercentage) {
            currentPercentage++;
            setTimeout(updatePercentage, stepTime);
        }
    }

    updatePercentage();
}

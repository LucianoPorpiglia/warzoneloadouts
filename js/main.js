
function hideShow(id) {
    const toggleBox = document.getElementById(id);
    const plusMinusIcon = toggleBox.previousElementSibling.querySelector('.div-plusOrMinus i');

        if (toggleBox.style.display !== "none") {
            toggleBox.style.display = "none";
            plusMinusIcon.classList.remove('fa-minus');
            plusMinusIcon.classList.add('fa-plus');
        } else {
            toggleBox.style.display = "block";
            plusMinusIcon.classList.remove('fa-plus');
            plusMinusIcon.classList.add('fa-minus');
        }
    }

function getGuns(guns, containerId) {
    const ul = document.getElementById(containerId);
    ul.innerHTML = '';

    guns.forEach((gun, index) => {
        let categoryClass = '';
        if (gun.category.includes("Nerf")) {
            categoryClass = 'nerf-box';
        } else if (gun.category.includes("Buff")) {
            categoryClass = 'buff-box';
        } else if (gun.category.includes("Meta")) {
            categoryClass = 'meta-box';
        } else if (gun.category.includes("Sniper")) {
            categoryClass = 'sniper-box';
        } else if (gun.category.includes("Pistol")) {
            categoryClass = 'pistol-box';
        } else if (gun.category.includes("Smg")) {
            categoryClass = 'smg-box';
        } else if (gun.category.includes("Assault-rifle")) {
            categoryClass = 'assault-rifle-box';
        } else if (gun.category.includes("Lmg")) {
            categoryClass = 'lmg-box';
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <article class="article-box ${categoryClass}">
                <button onclick="hideShow('toggleBoxes${index}-${containerId}')" style="border: none; background: none; padding: 0; cursor: pointer; width: 100%;">
                    <div class="box">
                        <div class="div-plusOrMinus"><i class="fa-solid fa-plus"></i></div>
                        <div class="div-text">
                            <p class="title-divtxt">${gun.name}</p>
                            <p class="desc-divtxt">${gun.playStyle}</p>
                        </div>
                        <div class="div-img"><img src="${gun.img}" alt="${gun.name}"></div>
                    </div>
                </button>
                <div id="toggleBoxes${index}-${containerId}" class="toggle-box" style="display: none;">
                    <div class="txt-toggle-box">
                        <div>
                            ${gun.accesories.map(accessory => `
                                <p class="accessory-type">${accessory.type}</p>
                            `).join('')}
                        </div>
                        <div>
                            ${gun.accesories.map(accessory => `
                                <p class="accessory">${accessory.name}</p>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </article>
        `;
        ul.appendChild(li);
    });
}

const gunList = [
    {
        category: ["Meta","Sniper"],
        name: "KAR98K",
        playStyle: "Long range",
        img: "../Euren-Loadouts/img/kar98k.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Silenciador L sonic"
        },{
            type: "Cañon",
            name: "Bryson carbine-s"
        },{
            type: "Laser",
            name: "Luz y laser sl razorhawk"
        },{
            type: "Mira",
            name: "Range caller v3.4"
        },{
            type: "Correas",
            name: "Correa de reconocimiento"
        }]
    },{
        category: ["Lmg"],
        name: "BRUEN-MK9",
        playStyle: "Long range",
        img: "../Euren-Loadouts/img/bruen-mk9.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Acople",
            name: "Empuñadura vertical bruen pivot"
        },{
            type: "Cañon",
            name: "Xrk horizon v2 de 58.42 cm"
        },{
            type: "Cargador",
            name: "60 balas"
        },{
            type: "Mira",
            name: "Corio eagleseye x2.5"
        }]
    },{
        category: ["Lmg"],
        name: "TAQ-EVOLVERE",
        playStyle: "Long range",
        img: "../Euren-Loadouts/img/TAQ-EVOLVERE.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Acople",
            name: "Empuñadura vertical bruen pivot"
        },{
            type: "Cañon",
            name: "Corto haste-70"
        },{
            type: "Municion",
            name: "Balas de calibre 7.62 x 51mm de gran peso"
        },{
            type: "Mira",
            name: "Corio eagleseye x2.5"
        }]
    },{
        category: ["Lmg"],
        name: "DG-58",
        playStyle: "Long range",
        img: "../Euren-Loadouts/img/dg-58.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Acople",
            name: "Empuñadura de apoyo pesada bruen"
        },{
            type: "Cañon",
            name: "Largo wudi"
        },{
            type: "Culata",
            name: "Placa de culata reductora de retroceso"
        },{
            type: "Mira",
            name: "Jak glassless"
        }]
    },{
        category: ["Smg"],
        name: "SUPERI-46",
        playStyle: "Short range",
        img: "../Euren-Loadouts/img/superi-46.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Acople",
            name: "Tope de mano dr-6"
        },{
            type: "Cañon",
            name: "Ligero zulu op3"
        },{
            type: "Culata",
            name: "Recue-9"
        },{
            type: "Cargador",
            name: "40 balas"
        }]
    },{
        category: ["Nerf","Smg"],
        name: "RAM-9",
        playStyle: "Short range",
        img: "../Euren-Loadouts/img/ram-9.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Acople",
            name: "Tope de mano dr-6"
        },{
            type: "Cañon",
            name: "Ligero fss imperator"
        },{
            type: "Culata",
            name: "Almohadilla hvs 3.4"
        },{
            type: "Cargador",
            name: "50 balas"
        }]
    },{
        category: ["Lmg"],
        name: "PULEMYOT-762",
        playStyle: "Long range",
        img: "../Euren-Loadouts/img/pulemyot-762.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Acople",
            name: "Empuñadura b052"
        },{
            type: "Cañon",
            name: "Largo jak annihilator"
        },{
            type: "Mira",
            name: "Corio eagleseye x2.5"
        },{
            type: "Kit de conversion",
            name: "Bullpup de jak annihilator"
        }]
    },{
        category: ["Smg"],
        name: "FJX-HORUS",
        playStyle: "Short range",
        img: "../Euren-Loadouts/img/fjx-horus.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Acople",
            name: "Tope de mano dr-6"
        },{
            type: "Cañon",
            name: "Pesado martis"
        },{
            type: "Municion",
            name: "Balas de calibre.45 auto de gran peso"
        },{
            type: "Cargador",
            name: "48 balas"
        }]
    },{
        category: ["Nerf","Lmg"],
        name: "HOLGER-26",
        playStyle: "Long range",
        img: "../Euren-Loadouts/img/holger-26.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Silenciador vt-7 spiritfire"
        },{
            type: "Cañon",
            name: "Fabrica holger"
        },{
            type: "Acople",
            name: "Empuñadura de apoyo pesada bruen"
        },{
            type: "Culata",
            name: "Ascent lord"
        },{
            type: "Mira",
            name: "Jak glassless"
        }]
    },{
        category: ["Nerf","Smg"],
        name: "AMR-9",
        playStyle: "Short range",
        img: "../Euren-Loadouts/img/amr-9.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Acople",
            name: "Tope de mano dr-6"
        },{
            type: "Culata",
            name: "Tubo amortiguador demo d50"
        },{
            type: "Mira",
            name: "Nydar model 2023"
        },{
            type: "Cargador",
            name: "50 balas"
        }]
    },{
        category: ["Buff","Smg"],
        name: "RIVAL-9",
        playStyle: "Short range",
        img: "../Euren-Loadouts/img/rival-9.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Cañon",
            name: "Rival-c clearshot"
        },{
            type: "Acople",
            name: "Tope de mano dr-6"
        },{
            type: "Culata",
            name: "Asalto a corta distancia exf"
        },{
            type: "Cargador",
            name: "50 balas"
        }]
    },{
        category: ["Nerf","Smg"],
        name: "HRM-9",
        playStyle: "Short range",
        img: "../Euren-Loadouts/img/hrm-9.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Acople",
            name: "Tope de mano dr-6"
        },{
            type: "Culata",
            name: "Plegable"
        },{
            type: "Empuñadura trasera",
            name: "Asalto pcs-90"
        },{
            type: "Cargador",
            name: "50 balas"
        }]
    },{
        category: ["Meta","Smg"],
        name: "STRIKER-9",
        playStyle: "Short range",
        img: "../Euren-Loadouts/img/striker-9.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Cañon",
            name: "Largo striker recon"
        },{
            type: "Acople",
            name: "Tope de mano dr-6"
        },{
            type: "Culata",
            name: "Fabrica striker"
        },{
            type: "Cargador",
            name: "50 balas"
        }]
    },{
        category: ["Buff","Smg"],
        name: "STRIKER",
        playStyle: "Short range",
        img: "../Euren-Loadouts/img/striker.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Acople",
            name: "Tope de mano dr-6"
        },{
            type: "Culata",
            name: "Ligera lachmann mk2"
        },{
            type: "Municion",
            name: "Balas de calibre.45 auto de gran peso"
        },{
            type: "Cargador",
            name: "50 balas"
        }]
    },{
        category: ["Meta","Smg"],
        name: "WSP-9",
        playStyle: "Short range",
        img: "../Euren-Loadouts/img/wsp-9.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Acople",
            name: "Empuñadura de apoyo pesada bruen"
        },{
            type: "Culata",
            name: "Pesada duster"
        },{
            type: "Mira",
            name: "Reflector mk.3"
        },{
            type: "Cargador",
            name: "50 balas"
        }]
    },{
        category: ["Smg"],
        name: "WSP-SWARM",
        playStyle: "Short range",
        img: "../Euren-Loadouts/img/wsp-swarm.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Cañon",
            name: "Largo wsp reckless-90"
        },{
            type: "Culata",
            name: "Culata pesada motion-v2"
        },{
            type: "Mira",
            name: "Nydar model 2023"
        },{
            type: "Cargador",
            name: "100 balas(or 50 balas)"
        }]
    },{
        category: ["Buff","Assault-rifle"],
        name: "SOA-SUBVERTER",
        playStyle: "Long range",
        img: "../Euren-Loadouts/img/soa-subverter.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Cañon",
            name: "Largo dozer-90"
        },{
            type: "Culata",
            name: "Culata pesada motion-v2"
        },{
            type: "Mira",
            name: "Jak glassless"
        },{
            type: "Cargador",
            name: "50 balas"
        }]
    },{
        category: ["Buff","Assault-rifle"],
        name: "SIDEWINDER",
        playStyle: "Long range",
        img: "../Euren-Loadouts/img/SIDEWINDER.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Cañon",
            name: "Precision tempus predator"
        },{
            type: "Acople",
            name: "Empuñadura de apoyo pesada bruen"
        },{
            type: "Mira",
            name: "Corio eagleseye x2.5"
        },{
            type: "Cargador",
            name: "30 balas"
        }]
    },{
        category: ["Assault-rifle"],
        name: "MTZ-762",
        playStyle: "Long range",
        img: "../Euren-Loadouts/img/MTZ-762.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Cañon",
            name: "MTZ-precision blackthorn"
        },{
            type: "Acople",
            name: "Empuñadura de apoyo pesada bruen"
        },{
            type: "Mira",
            name: "Jak glassless"
        },{
            type: "Cargador",
            name: "30 balas"
        }]
    },{
        category: ["Buff","Assault-rifle","Meta"],
        name: "MTZ-556",
        playStyle: "Long range",
        img: "../Euren-Loadouts/img/mtz-556.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Cañon",
            name: "MTZ clinch pro"
        },{
            type: "Acople",
            name: "Empuñadura de apoyo pesada bruen"
        },{
            type: "Mira",
            name: "Jak glassless"
        },{
            type: "Cargador",
            name: "50 balas"
        }]
    },{
        category: ["Pistol"],
        name: "WSP-STINGER",
        playStyle: "Short range",
        img: "../Euren-Loadouts/img/wsp-stinger.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Dispositivo de embestida s s-37c dl"
        },{
            type: "Cañon",
            name: "Corto y ligero"
        },{
            type: "Laser",
            name: "Xten l400 para arma secundaria"
        },{
            type: "Empuñadura trasera",
            name: "Wsp stinger duales"
        },{
            type: "Cargador",
            name: "32 balas"
        }]
    },{
        category: ["Pistol"],
        name: "COR-45",
        playStyle: "Short range",
        img: "../Euren-Loadouts/img/cor-45.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Municion",
            name: "Balas de calibre .45 auto de gran peso"
        },{
            type: "Mira",
            name: "Reflector slate"
        },{
            type: "Sistema de gatillo",
            name: "Xrk v21 match pesado"
        },{
            type: "Cargador",
            name: "40 balas"
        }]
    },{
        category: ["Nerf","Pistol"],
        name: "RENETTI",
        playStyle: "Short range",
        img: "../Euren-Loadouts/img/renetti.png",
        accesories: [{
            type: "Boca de Cañon",
            name: "Supresor de destello compensado zehmn 35"
        },{
            type: "Mira",
            name: "Nydar model 2023"
        },{
            type: "Culata",
            name: "Ravage-8"
        },{
            type: "Cargador",
            name: "50 balas"
        },{
            type: "Kit de conversion",
            name: "Kit de carabina jak ferocity"
        }]
    }
]

const metaGuns = gunList.filter(gun => gun.category.includes("Meta"));
const nerfGuns = gunList.filter(gun => gun.category.includes("Nerf"));
const buffGuns = gunList.filter(gun => gun.category.includes("Buff"));
const sniperGuns = gunList.filter(gun => gun.category.includes("Sniper"));
const pistolGuns = gunList.filter(gun => gun.category.includes("Pistol"));
const assaultGuns = gunList.filter(gun => gun.category.includes("Assault-rifle"));
const smgGuns = gunList.filter(gun => gun.category.includes("Smg"));
const lmgGuns = gunList.filter(gun => gun.category.includes("Lmg"));

getGuns(metaGuns, 'meta-gun-list');
getGuns(nerfGuns, 'nerf-gun-list');
getGuns(buffGuns, 'buff-gun-list');
getGuns(sniperGuns, 'sniper-gun-list');
getGuns(pistolGuns, 'pistol-gun-list');
getGuns(assaultGuns, 'assault-rifle-gun-list');
getGuns(smgGuns, 'smg-gun-list');
getGuns(lmgGuns, 'lmg-gun-list');

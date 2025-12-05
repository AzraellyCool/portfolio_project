function load() {
    fetch('projects.json')
    .then(result => {
        return result.json();
    })
    .then(data => {
        createHTML(data);
    });
}

function createHTML(data)
{
    let projectSect = document.getElementById("projects");
    
    for(let i = 0; i<data.length; i++)
    {
        let section = document.createElement("section");
        let h1 = document.createElement("h1");
        let event = document.createElement("h2");
        let year = document.createElement("h2");
        let p = document.createElement("p");
        let img = document.createElement("img");
        let topSect = document.createElement("section");
        let bottomSect = document.createElement("section");
        let srcCode = document.createElement("h2");

        img.src = data[i].img_src;
        console.log(img.src);
        h1.innerHTML = `${data[i].title}`;
        event.innerHTML = `${data[i].event}`;
        year.innerHTML = `${data[i].year}`;
        p.innerHTML = `${data[i].description}`;
        srcCode.innerHTML = `${data[i].source_code}`
        
        topSect.appendChild(event);
        topSect.appendChild(year);


        bottomSect.appendChild(p);
        bottomSect.appendChild(srcCode);

        section.appendChild(h1);
        section.appendChild(topSect);
        section.appendChild(bottomSect);
        section.insertBefore(img,bottomSect);
        section.appendChild(bottomSect);


        /*section.addEventListener('mouseover', function() {
            //add check for skills used, change the list's bg color
            section.style.backgroundColor = 'lightcoral';
        });
        section.addEventListener('mouseout', function() {
            section.style.backgroundColor = 'lightblue';
        });*/

        projectSect.appendChild(section);

    }
}
document.addEventListener("DOMContentLoaded", load);
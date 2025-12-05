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
    let sideSkills = document.getElementById("side-skills");
    let skillList = sideSkills.getElementsByTagName("li");
    
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
        let a = document.createElement("a");

        img.src = data[i].img_src;
        h1.innerHTML = `${data[i].title}`;
        event.innerHTML = `${data[i].event}`;
        year.innerHTML = `${data[i].year}`;
        p.innerHTML = `${data[i].description}`;
        srcCode.innerHTML = "Source code &#8594";
        
        a.href = `${data[i].source_code}`;
        a.appendChild(srcCode);
        console.log(a);

        topSect.appendChild(event);
        topSect.appendChild(year);


        bottomSect.appendChild(p);
        bottomSect.appendChild(a);
        

        section.appendChild(h1);
        section.appendChild(topSect);
        section.appendChild(bottomSect);
        section.insertBefore(img,bottomSect);
        section.appendChild(bottomSect);


        section.addEventListener('mouseover', function() {
            //add check for skills used, change the list's bg color
            for(let n = 0; n<skillList.length; n++){
                if (data[i].skills_used.includes(skillList[n].innerText))
                {
                    skillList[n].style.backgroundColor = 'coral';
                    skillList[n].style.transition = "background-color 0.5s";
                    console.log("hi");
                }
                console.log(skillList[n].innerText);
                console.log(data[i].skills_used);
            }
            ;
        });
        
        section.addEventListener('mouseout', function(){
            for(let n = 0; n<skillList.length; n++){
            skillList[n].style.backgroundColor = 'aqua';
            }
        });

        projectSect.appendChild(section);

    }
}
document.addEventListener("DOMContentLoaded", load);
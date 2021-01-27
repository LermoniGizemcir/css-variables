//spacing ataması yapan metot
function changeSpacing(spacing) {
    console.log(spacing)

    document.getElementById("img").style.borderStyle = "solid"
    document.getElementById("img").style.borderWidth = spacing + "px"
}

//blur ataması yapan metot
function changeBlur(blur) {
    console.log(blur)

    document.getElementById("img").style.filter = `blur(${blur}px)`
    document.getElementById("img").style.webkitFilter = `blur(${blur}px)`
}

//renk ataması yapan metot
function changeColor(color) {
    console.log(color)
    
    document.getElementById("img").style.borderColor = color
}


//sayfa ilk yüklendiğinde spacing blur ve base color değerlerini al ve css değerlerine ata
window.onload = function () {
    const spacing = document.getElementById("spacing").value
    const blur = document.getElementById("blur").value
    const color = document.getElementById("base").value

    changeSpacing(spacing);
    changeBlur(blur);
    changeColor(color);

    //spacing slider input değişimi dinlenir ve image in border ının kalınlığı değiştirilir.
    document.getElementById("spacing").addEventListener("change", function (event) {
        changeSpacing(event.target.value);
    })

    //blur slider inpur değişimi dinlenir ve image blur değeri değiştirilir.
    document.getElementById("blur").addEventListener("change", function (event) {
        changeBlur(event.target.value);
    })

    //color picker input seçildiğinde border color ı değiştirilir.
    document.getElementById("base").addEventListener("change", function (event) {
        changeColor(event.target.value);
    })
}

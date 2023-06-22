function getAttributes(){
    const a = document.getElementById("w3r");
    const lang = a.getAttribute("hreflang");

    console.log("lang = ", lang);
    console.log("typeof lang = ", typeof lang);
    rel = a.getAttribute("rel");

    console.log("rel = ", rel);
    console.log("typeof rel = ", typeof rel);

    const target = a.getAttribute("target");

    console.log("target = ", target);
    console.log("typeof target = ", typeof target);

    const href = a.getAttribute("href");

    console.log("href = ", href);
    console.log("typeof href = ", typeof href);
}

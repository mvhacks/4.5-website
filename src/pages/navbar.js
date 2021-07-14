let timeoutCode = null;
export default function navbar() {
    const nav = document.querySelector("nav");
    if (document.referrer.includes(window.location.hostname)) // checks to see if past page was same URL or not. If it was then it displays animation.
    {
        const container = nav;
        container.style.setProperty("transition", "none", "important");
        container.classList.add("expanded");

        container.querySelectorAll("a").forEach(e=>{
            const s = e.style;
            s.setProperty("color", "rgba(0, 0, 0, 0)");
            s.setProperty("border", "none");
        })
        window.setTimeout(e=>{
            container.style.setProperty("transition", "");
            container.classList.toggle("expanded");
                container.querySelectorAll("a").forEach(e=>{
            const s = e.style;
            s.setProperty("color", "");
            s.setProperty("border", "");
        }, 500)
        })
    }
    function setHeightOfContainer(expanded)
    {
        expanded = expanded ?? nav.classList.contains("expanded"); // ?? means if first value is null then use the value after the ??. Basically if expanded is null, set expanded to the second term
        if (!expanded)
        {
            nav.style.maxHeight = 70+"px"; // 70 because the button height is 50px and there is 10px of padding for both the top and the bottom.
        }
        else
        {
            nav.style.maxHeight = window.innerHeight-20+"px"; // window.innerHeight to get the max height visable (specificially for mobile) - 20 because of top and bottom padding.
        }
    }
    function onChangeInExpanded(linkContainer)
    {
            const expanded = linkContainer.classList.contains("expanded"); // checks if container is showing.
            setHeightOfContainer(true);
            if (timeoutCode)
            {
                window.clearTimeout(timeoutCode) // if the event hasn't happened, cancel the event.
            }
            timeoutCode = window.setTimeout(()=>{
                timeoutCode = null // sets timeoutCode to null to show that the event already happened.
                linkContainer.style.setProperty("overflow", expanded?"auto":"hidden"); // shows scrollbar if needed. Without this the scrollbar would appear during the expanding animation
            }, expanded?500:0) // 500ms = .5s or the animation time. The code inside of the brackets will run after the animation is finished.
            window.setTimeout(()=>
            {
                linkContainer.childNodes[0].textContent = expanded?"✕":"|||";
            }, 250);
            window.addEventListener("resize", e=>
            {
                setHeightOfContainer(true);
            })
    }
    setHeightOfContainer(true);
    document.getElementById("pancake").addEventListener('click', e=> // when the pancake button is clicked
    {
        e.target.parentElement.classList.toggle("expanded"); // toggle the class "expanded" on the parent of the target (the target is the pancake button) so it toggles the class expanded on the container.
        onChangeInExpanded(e.target.parentElement);
    })

    document.addEventListener('focus', function() { // if user tabs over link then the menu opens, if they tab out it closes
        if (document.activeElement.nodeName !== "BUTTON" && document.activeElement.parentElement.nodeName === "NAV")
        {
            document.activeElement.parentElement.classList.add("expanded");
            onChangeInExpanded(document.activeElement.parentElement);
        }
        else
        {
            const container = nav;
            container.classList.remove("expanded");
            onChangeInExpanded(container);
        }
    }, true);
    nav.querySelectorAll("a").forEach(e=>{
        e.addEventListener("click", e=>{
            const container = nav;
            container.classList.remove("expanded");
            onChangeInExpanded(container);
        })
    })
}
const notRegistered = document.querySelector(".not-registered")

const getRegistrationData = async function(){
    const request = await fetch ("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json")
    const data = await request.json()
    displayContactList(data)
}

const displayContactList = function(data){
    for( let info of data){
        if( info.registered === "no"){
            let li = document.createElement("li")
            li.innerText = info.name
            notRegistered.append(li)
        }
    }
}

getRegistrationData()
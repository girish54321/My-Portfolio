console.log("he")

let myWorkArray = [
    {
        year: "2021 - Current",
        projectName: "GoBOLT Partner",
        companyName: "NeoSoft / GoBolt",
        aboutApp: "GoBolt is a Delivering Express Supply Chain provider where they provide there apps as product to help client manage their shipments:",
        appFeatures: [
            "Keep track of shipment",
            "Create new order",
            "Get real time notification about shipment",
            "Add, Update Or delete shipment",
            "Part for Eco system"
        ],
        rolesAndResponsibilities: "My responsibility was to work closely with the Backend and UX team to implement features. try understanding client needs and make changes accordingly. Test the app and publish the app to App Store and Google play store."
    },
    {
        year: "2021",
        projectName: "GoBOLT Consignee",
        companyName: "NeoSoft / GoBolt",
        aboutApp: "GoBolt is a Delivering Express Supply Chain provider where they provide there apps as product to help client manage their shipments:",
        appFeatures: [
            "Keep track of shipment",
            "Create POD",
            "Clean POD",
            "Part for Eco system"
        ],
        rolesAndResponsibilities: "My responsibility was to work closely with the Backend and UX team to implement features. try understanding client needs and make changes accordingly. Test the app and publish the app to App Store and Google play store."
    },
    {
        year: "2020",
        projectName: "IndiaCharts (indiaCharts.com)",
        companyName: "Pixels Agency",
        aboutApp: "IndiaCharts app is an education app where the admin will upload the new article and users can view or bookmark the article and pay for premium articles. IndiaCharts app is the one platform which helps users to stay updated with Stock market changes",
        appFeatures: [
            "All the articles in one place",
            "Real time notification",
            "Easy to use UI",
            "Free and paid videos in app",
            "Easy payment options",
            "Podcast"
        ],
        rolesAndResponsibilities: "My responsibility was to work closely with the Backend and UX team to implement features. try understanding client needs and make changes accordingly. Test the app and publish the app to App Store and Google play store."
    },
    {
        year: "2020",
        projectName: "Fagnia Impex",
        companyName: "Pixels Agency",
        aboutApp: "Fagnia Impex app warehouse management system where admin can keep track on all the product, shipment and supplier.Admin and all so use CMS for warehouse management and both data will be synced.",
        appFeatures: [
            "Warehouse management in one place",
            "Add or remove product in app",
            "Contact supplier",
            "Keep track of shipment",
        ],
        rolesAndResponsibilities: "My responsibility was to work closely with the Backend and UX team to implement features. try understanding client need and make changes accordingly."
    },
    {
        year: "2020",
        projectName: "MyGALF",
        companyName: "Pixels Agency",
        aboutApp: "MyGALF is a fitness cetric eCommerce app where users can shop for gym items,nutrition and GALF services. This app helps customers connect with GALF easily and users can enroll for any paid and unpaid events.",
        appFeatures: [
            "GALF Shop",
            "Run tracker with share option on social media",
            "Health and Fitness Event Registrations",
            "Services and Panelist Connect",
        ],
        rolesAndResponsibilities: "My responsibility was to work closely with the Backend and UX team to implement features. To try understanding client needs and publish app to the App Store and Google play store."
    },
    {
        year: "2029",
        projectName: "Anganwadi survey & Management App",
        companyName: "TiTLi Early Childhood Training Institute",
        aboutApp: "MyGALF is a fitness cetric eCommerce app where users can shop for gym items,nutrition and GALF services. This app helps customers connect with GALF easily and users can enroll for any paid and unpaid events.",
        appFeatures: [
            "Survey With Question",
            "Offline storage & Upload",
            "Anganwadi registration"
        ],
        rolesAndResponsibilities: "My responsibility was to work closely with the Backend and UX team to implement features. To try understanding client needs and publish app to the App Store and Google play store."
    }
]

const htmlData = () => {
    let html = myWorkArray.map((itemData) => {
        return createCard(itemData)
    })
    console.log(html.toString());
}

const createCard = (data) => {

    let bullit = data.appFeatures.map((item) => {
        return `<li>${item}</li>`
    })

    return `<div class="work-experience">
    <small class="date">${data.year}</small>
    <h3 class="h5 date-title">${data.projectName} - <a href="http://en.orson.io" title="${data.projectName}"></a></h3>
    <div class="row">
      <div class="col-md-5">
        <img src="./assets/images/img-02.jpg" class="img-responsive" alt="">
        <div class="row">
          <div class="col-md-6">
            <h3 class="h5">Company</h3>
        <p>${data.companyName}</p>
          </div>
          <div class="col-md-6">
            <h3 class="h5">Team size</h3>
            <p>2</p>
          </div>
        </div>
        <h3 class="h5">Links:</h3>
        <h3 class="h5"><a href="http://en.orson.io" title="Android">Android</a></h3>
        <h3 class="h5"><a href="http://en.orson.io" title="ioS website">iOS</a></h3>
      </div>
      <div class="col-md-7">
        <h3 class="h5">${data.projectName}</h3>
        <p>${data.aboutApp}</p>
        <h3 class="h5">Features include:</h3>
        <ul>
          ${bullit.toString()}
        </ul>
        <h3 class="h5">Roles and responsibilities:</h3>
        <p>${data.rolesAndResponsibilities}</p>
      </div>
    </div>
  </div>`
}


// htmlData();


let workData = [
    {
        timeLine: "March 2021 - PRESENT",
        companyName: "NeoSOFT Technologies, Mumbai — React-Native",
        rolls: [
            "Creating app screen form UI layout",
            "Played major role in layout modifications to improve functionality",
            "Worked closely with other team members in such tasks as troubleshooting and debugging.",
            "Managed all aspects of Android app lifecycle from research and planning through deployment.",
            "Devised documentation for each app, detailing operation aspects functions, capabilities"
        ]
    },
    {
        timeLine: "Ang 2019 - Nov 2021",
        companyName: "Pixels Agency, Mumbai — (React-Native & Native Android)",
        rolls: [
            "Creating app screen form UI layout",
            "Played major role in layout modifications to improve functionality",
            "Worked closely with other team members in such tasks as troubleshooting and debugging.",
            "Managed all aspects of Android app lifecycle from research and planning through deployment.",
            "Devised documentation for each app, detailing operation aspects functions, capabilities"
        ]
    },
    {
        timeLine: "Feb 2019 - July 2019",
        companyName: "TiTLi Early Childhood Training Institute , Mumbai — (Native Android)",
        rolls: [
            "Creating app screen form UI layout",
            "Played major role in layout modifications to improve functionality",
            "Worked closely with other team members in such tasks as troubleshooting and debugging.",
            "Managed all aspects of Android app lifecycle from research and planning through deployment.",
            "Devised documentation for each app, detailing operation aspects functions, capabilities"
        ]
    }
]



const createWorkHTML = (item) => {

    let bullit = item.rolls.map((item) => {
        return `<li>${item}</li>`
    })

    return `<div class="work-experience">
    <small class="date">${item.timeLine}</small>
    <h3 class="h5 date-title"> ${item.companyName} - <a href="http://en.orson.io" title=${item.companyName}></a></h3>
    <ul>
    ${bullit.toString()}
  </ul>
  </div>`
}

const getWorkHtml = () => {
    let html = workData.map((item) => {
        return createWorkHTML(item)
    })

    console.log(html.toString());
}

// getWorkHtml()

const getWorkE = (item) => {

    let bullit = item.rolls.map((item) => {
        return `<li>${item}</li>`
    })

    return `<div class="work-experience">
    <small class="date">${item.date}</small>
    <h3 class="h5 date-title"> ${item.companyName}, ${item.location} — ${item.profile} - <a href=${item.webLink} title=${item.companyName}></a></h3>
    <ul>
    ${bullit.toString()}
  </ul>`
}

const workEEE = [
    {
        date: "March 2021 - PRESENT",
        companyName: "NeoSOFT Technologies",
        location: "Mumbai",
        profile: "React-Native",
        webLink: "",
        rolls: [
            "Creating app screen form UI layout",
            "Played major role in layout modifications to improve functionality",
            "Worked closely with other team members in such tasks as troubleshooting and debugging.",
            "Managed all aspects of Android app lifecycle from research and planning through deployment.",
            "Devised documentation for each app, detailing operation aspects,functions, capabilities"
        ]
    },
    {
        date: "Ang 2019 - Nov 2021",
        companyName: "Pixels Agency",
        location: "Mumbai",
        profile: "React-Native & Native Android",
        webLink: "",
        rolls: [
            "Creating app screen form UI layout",
            "Played major role in layout modifications to improve functionality",
            "Worked closely with other team members in such tasks as troubleshooting and debugging.",
            "Managed all aspects of Android app lifecycle from research and planning through deployment.",
            "Devised documentation for each app, detailing operation aspects,functions, capabilities"
        ]
    },
    {
        date: "Feb 2019 - July 2019",
        companyName: "TiTLi Early Childhood Training Institute",
        location: "Mumbai",
        profile: "Native Android",
        webLink: "",
        rolls: [
            "Creating app screen form UI layout",
            "Played major role in layout modifications to improve functionality",
            "Worked closely with other team members in such tasks as troubleshooting and debugging.",
            "Managed all aspects of Android app lifecycle from research and planning through deployment.",
            "Devised documentation for each app, detailing operation aspects,functions, capabilities"
        ]
    }
]


const givemework = () => {

    let hhData = workEEE.map((item) => {
        return getWorkE(item)
    })

    console.log(hhData.toString());
}
console.log("are nyou ok");
givemework();
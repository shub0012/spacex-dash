import config from '../config/config'
const domain = `${config.api.spaceXApi}/${config.version.spaceXApi}`
const defaultQueryHeaders = { 'content-type': 'application/json'}
const defaultPostConfiguration = { method: 'POST', headers: defaultQueryHeaders}

const defaultLaunchQuery = {
    query:{},
    options: { populate: ["payloads", "rocket", "landpad", "launchpad", "ships", "crew"], sort: { flight_number: "desc" }, limit: 20 }
}

export const getAllLaunches = async (page = 1, limit = defaultLaunchQuery.options.limit) => {
    const payload = { 
        ...defaultLaunchQuery,
        query: {...defaultLaunchQuery.query},
        options: {...defaultLaunchQuery.options, limit: limit, page: page}
    }
    let launchData = {}
    await fetch(`${domain}/launches/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) })
        .then(res => res.json())
        .then(data => {
            if(data){
                launchData = data
            }
        })
        return launchData
}

export const getAllShips = async (page = 1) => {
    let shipData = {}
    const payload = { options: { limit: 20, page: page }};
    await fetch(`${domain}/ships/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload)  })
    .then(res => res.json())
    .then(data => {
        if(data){
            shipData = data
        }
    })
    return shipData
}

export const getAllRockets = async (page = 1) => {
    let roketData = {}
    const payload = { options: { limit: 20, page: page }};
    await fetch(`${domain}/rockets/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload)  })
    .then(res => res.json())
    .then(data => {
        if(data){
            roketData = data
        }
    })
    return roketData
}

export const getAllLaunchpads = async (page = 1) => {
    let launchpadData = {}
    const payload = { options: { limit: 20, page: page }};
    await fetch(`${domain}/launchpads/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload)  })
    .then(res => res.json())
    .then(data => {
        if(data){
            launchpadData = data
        }
    })
    return launchpadData
}

export const getAllLandpads = async (page = 1) => {
    let landpadData = {}
    const payload = { options: { limit: 20, page: page }};
    await fetch(`${domain}/landpads/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload)  })
    .then(res => res.json())
    .then(data => {
        if(data){
            landpadData = data
        }
    })
    return landpadData
}

export const getAllCrew = async (page = 1) => {
    let crewData = {}
    const payload = { options: { limit: 20, page: page }};
    await fetch(`${domain}/crew/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload)  })
    .then(res => res.json())
    .then(data => {
        if(data){
            crewData = data
        }
    })
    return crewData
}
function getRings (ringInfo) {
    return fetch("http://localhost:8088/ring", {
    })
    .then(response => response.json())
    .then(ring => {
        buildRing(ring)
    })
}

import express from "express"; //Imports the Express library.

const app = express();//Creates our Express application.
const PORT = 3000;//Chooses the port where our server listens.

app.get("/", (req, res)  => {  //Defines what happens when someone sends a GET request to the homepage /.Contains information about the incoming request.
    res.send("YouTube Playlists Manager API is running!");//Sends a response back to the browser.
});

//2

app.get("/api/videos/:id", (req, res) => {
    const videoId = Number(req.params.id);

    const videos = [
        { id: 1, title: "Learn JavaScript", channel: "Code Academy" },
        { id: 2, title: "Learn Node.js", channel: "Web Dev" }
    ];

    const video = videos.find(v => v.id === videoId);

    if (!video) {
        return res.status(404).json({ message: "Video not found" });
    }

    res.json(video);
});

app.listen(PORT, () => {//Starts the server.
    console.log(`Server running at http://localhost:${PORT}`);
});
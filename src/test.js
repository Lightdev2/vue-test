let folders = {
    folders: [{
        name: "assets",
        folders: [
            {
                name: "icons",
                folders: [],
                files: [
                    {
                        name: "close.svg",
                        type: "image/svg",
                        length: "1024"
                    },
                    {
                        name: "open.svg",
                        type: "image/svg",
                        length: "1024"
                    },
                    {
                        name: "exit.svg",
                        type: "image/svg",
                        length: "1024"
                    },
                    {
                        name: "relocat.svg",
                        type: "image/svg",
                        length: "1024"
                    }
                ]
            },
            {
                name: "backgrounds",
                folders: [],
                files: [
                    {
                        name: "common.jpeg",
                        type: "image/jpeg",
                        length: "1024"
                    },
                    {
                        name: "secondary.jpg",
                        type: "image/jpeg",
                        length: "1024"
                    },
                    {
                        name: "overlay.png",
                        type: "image/png",
                        length: "1024"
                    }
                ]
            }],
        files: []
    }],
    files: [
        {
            name: ".browserslistrc",
            type: "application/octet-stream",
            length: "1024"
        },
        {
            name: ".gitignore",
            type: "text/plain",
            length: "231"
        },
        {
            name: "babel.config.js",
            type: "application/javascript",
            length: "73"
        },
        {
            name: "package-lock.json",
            type: "application/json",
            length: "47941"
        }]
}


const result = {
    files: [],
    folders: []
}
function findItems(folders, files, pattern) {
    if (files == null) return;
    if (folders == null) return;
    files.forEach(file => {
         console.log(pattern, file.name)
        if (file.name.includes(pattern)) {
            result.files.push(file)
        }
    })
    folders.forEach(folder => {
        if (folder.name.includes(pattern)) {
            result.folders.push(folder);
        }
        findItems(folder.folders, folder.files, pattern)
    })
    return result;
}

console.log(findItems(folders.folders, folders.files, "co"))
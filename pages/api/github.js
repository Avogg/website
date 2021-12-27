const { Octokit } = require("@octokit/rest");

export default async (req, res) => {
    const octokit = new Octokit({});

    var data = {
        vasco: {
            git: "vasco-martins",
        },
        miguel: {
            git: "esfoliante",
        },
        rodrigo: {
            git: "ramos21rodrigo",
        },
    };

    for (var git in data) {
        const profile = await octokit.request("/users/" + data[git].git);

        data[git].img = profile.data.avatar_url;
        data[git].url = profile.data.html_url;
        data[git].bio = profile.data.bio;
    }

    console.log(data.rodrigo);

    const profile2 = await octokit.request("/users/ramos21rodrigo");
    console.log(profile2);

    return res.status(200).json({ vasco: data.vasco, miguel: data.miguel, rodrigo: data.rodrigo });

}
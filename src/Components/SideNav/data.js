export const nav = [
    {
        "label": "Home",
        "to": "/"
    },
    {
        "label": "Profile",
        "to": "/profile",
        "children": [{
            "label": "social",
            "to": "/social",
            "children": [{
                "label": "insta",
                "to": "/insta"
            },
            {
                "label": "fb",
                "to": "/fb"
            }
            ]
        },
        {
            "label": "gallery",
            "to": "/gallery"
        }
        ]
    },
    {
        "label": "About",
        "to": "/about",
        "children": [{
            "label": "contact",
            "to": "/contact",
        }]
    },
]
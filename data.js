var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-entrance",
      "name": "Front Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -1.7775508810043466,
        "pitch": -0.3326742802112168,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.6861744739291336,
          "pitch": 0.022348248571768536,
          "rotation": 0,
          "target": "1-admin-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-admin-reception",
      "name": "Admin Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.6712452539154281,
        "pitch": -0.042184037460403445,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.1498559724987079,
          "pitch": 0.10145249103739573,
          "rotation": 1.5707963267948966,
          "target": "2-conference-room-front"
        },
        {
          "yaw": 0.2683938955975602,
          "pitch": 0.1031209891588496,
          "rotation": 4.71238898038469,
          "target": "5-lower-entrance"
        },
        {
          "yaw": -2.0891572522839965,
          "pitch": 0.37493672219226326,
          "rotation": 5.497787143782138,
          "target": "0-front-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-conference-room-front",
      "name": "Conference Room Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -2.028483166237937,
        "pitch": 0.2947601386715526,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.5035901407338734,
          "pitch": 0.004281539726056494,
          "rotation": 7.853981633974483,
          "target": "4-wombat-room"
        },
        {
          "yaw": -2.0737438045163312,
          "pitch": -0.03808357046628075,
          "rotation": 3.141592653589793,
          "target": "3-conference-room-rear"
        },
        {
          "yaw": 2.930541652476599,
          "pitch": 0.0883845600570794,
          "rotation": 0,
          "target": "6-chapel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-conference-room-rear",
      "name": "Conference Room Rear",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.9800694631615592,
        "pitch": 0.41354537595314866,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.996122839520563,
          "pitch": -0.03006533423544333,
          "rotation": 15.707963267948973,
          "target": "2-conference-room-front"
        },
        {
          "yaw": 0.8834332373971066,
          "pitch": -0.0007958648829138326,
          "rotation": 1.5707963267948966,
          "target": "4-wombat-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wombat-room",
      "name": "Wombat Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.6382290108916262,
        "pitch": 0.44644012498728713,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.2611275181521613,
          "pitch": 0.03957040829309122,
          "rotation": 23.561944901923464,
          "target": "3-conference-room-rear"
        },
        {
          "yaw": -0.8577488617376616,
          "pitch": 0.04219357485920838,
          "rotation": 0,
          "target": "5-lower-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lower-entrance",
      "name": "Lower Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -2.676791940477891,
        "pitch": 0.034496798020462904,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 3.132553434785824,
          "pitch": 0.11946700812499067,
          "rotation": 4.71238898038469,
          "target": "0-front-entrance"
        },
        {
          "yaw": -2.612425972917787,
          "pitch": 0.04328922180325989,
          "rotation": 1.5707963267948966,
          "target": "4-wombat-room"
        },
        {
          "yaw": 0.49101548545802487,
          "pitch": 0.13247096303313732,
          "rotation": 0,
          "target": "1-admin-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-chapel",
      "name": "Chapel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -2.699062117528376,
        "pitch": 0.1216181939023393,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.24584962665965904,
          "pitch": 0.12215586293589098,
          "rotation": 0,
          "target": "2-conference-room-front"
        },
        {
          "yaw": -1.1368347308062354,
          "pitch": 0.16803077331845095,
          "rotation": 0,
          "target": "1-admin-reception"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

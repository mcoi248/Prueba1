var APP_DATA = {
  "scenes": [
    {
      "id": "0-p11",
      "name": "p11",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.8858962602244453,
        "pitch": 0.2051883425511054,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.6050531569237032,
          "pitch": 0.18432787840492537,
          "rotation": 0,
          "target": "1-p22"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.07009277625773436,
          "pitch": -0.23288793169260913,
          "title": "mENSAJE DE PRUEBA",
          "text": "hOLA hOLA&nbsp;"
        }
      ]
    },
    {
      "id": "1-p22",
      "name": "p22",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4335890141988585,
          "pitch": 0.3910776565012437,
          "rotation": 0,
          "target": "0-p11"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6874759791963854,
          "pitch": 0.1929396144099389,
          "title": "cONTROL DE ACCESO",
          "text": "hOLA hOLA hoLA"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};

/ Base configuration for map and layer preview These are maps are shown embedded in geonode /
var MS2_BASE_PLUGINS = {
	"desktop": [{
			"name": "Map",
			"cfg": {
                "shouldLoadFont": true,
                "fonts": ['FontAwesome'],
				"tools": ["locate", "measurement", "draw","overview", "scalebar"],
                "mapOptions": {
					"openlayers": {
						"attribution": {
							"container": "#footer-attribution-container"
						},
						"interactions": {
							"pinchRotate": true,
							"altShiftDragRotate": false
						}
					}
				},
                "toolsOptions": {
                     "scalebar": {
                          "leaflet": {
                               "position": "topRight"
                           }
                       },
                       "overview":{
                           "leaflet": {
                                "position": "topRight"
                            }
                       }
                   },
			}
		},
            {
              "name": "pengMap",
              "cfg": {
                "shouldLoadFont": true,
                "fonts": ['FontAwesome'],
                "tools": ["measurement", "locate", "overview", "scalebar", "draw", {
                  "leaflet": {
                    "name": "test",
                    "impl": "{context.TestSupportLeaflet}"
                  }
                  }],
                "toolsOptions": {
                  "test": {
                    "label": "Hello"
                  }

                }
              }
          },
        {
            "name": "Identify",

            "cfg": {
                "showFullscreen": true,
                "dock": true,
                // "showInMapPopup": true,
                "position": "top",
                "size": 0.2,
                "fluid": true,
                "showHighlightFeatureButton":true,
                "disableCenterToMarker":false,


                "viewerOptions": {
                    "container": "{context.ReactSwipe}",


                }
            },
            "override": {
                "Toolbar": {
                    "position": 11,
                    "alwaysVisible": true
                }
            }
        },
		{
			"name": "BackgroundSelector",
			"cfg": {
				"style": {
					"bottom": 100,
					"marginBottom": 225
				},
				"dimensions": {
					"side": 65,
					"sidePreview": 65,
					"frame": 3,
					"margin": 5,
					"label": false,
					"vertical": true,
				}
			}
		},


		{
			"name": "TOC",
			"cfg": {
				"activateMapTitle": true,
				"activateMetedataTool": false,
				"activateRemoveLayer": false,
                "activateDownloadTool":true

			}

		},
		{
			"name": "Settings",
			"cfg": {
				"wrap": true
			}
		},
             "GeoStory",
             "GridContainer",
             "Styler",
             "StyleEditor",
             "Snapshot",
             "ThematicLayer",

             // "Locate",
             "Notifications",

             "FloatingLegend",
             "MapImport",
             "Share",


             {
     			"name": "MapExport",
     			"override": {
     				"Toolbar": {
     					"alwaysVisible": true
     				}
     			}
     		},



             // "Details"

        {
			"name": "Toolbar",
			"id": "NavigationBar",
			"cfg": {
				"id": "navigationBar",
				"layout": "horizontal"
			}
		}, {
			"name": "MapLoading",
			"override": {
				"Toolbar": {
					"alwaysVisible": true
				}
			}
		},


        "DrawerMenu",

		"Cookie",
		"OmniBar",
		"Expander",
  	"Undo",
		"Redo",
		"BurgerMenu",
		"MapFooter",
		"Measure",
		{
			"name": "Print",
			"cfg": {
				"disablePluginIf": "{state('mapType') === 'cesium'}",
				"useFixedScales": true,
				"mapWidth": 256
			}
		},
		{
			"name": "ZoomAll",
			"override": {
				"Toolbar": {
					"alwaysVisible": false
				}
			}
		},
		{
			"name": "ZoomIn",
			"override": {
				"Toolbar": {
					"alwaysVisible": true
				}
			}
		},
		{
			"name": "ZoomOut",
			"override": {
				"Toolbar": {
					"alwaysVisible": true
				}
			}
		}, {
			"name": "Timeline",
			"cfg": {
				"style": {
					"marginBottom": 80,
					"marginLeft": 30,
					"marginRight": 45
				},


				"compact": false
			}

		}, "Playback"
	]
}

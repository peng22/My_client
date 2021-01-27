var MS2_PLUGINS = {
	"desktop": [{
			"name": "Map",
			"cfg": {
				"tools": ["locate", "measurement"],
				"mapOptions": {
					"openlayers": {
						"interactions": {
							"pinchRotate": false,
							"altShiftDragRotate": false
						}
					},
					"leaflet": {
						"attribution": {
							"container": "#mapstore-map-footer-container"
						}
					}
				}
			}
		}, {
			"name": "DrawerMenu"
		}, {
			"name": "BackgroundSelector",
			"cfg": {
				"style": {
					"bottom": 100,
					"marginBottom": 130
				},
				"dimensions": {
					"side": 65,
					"sidePreview": 65,
					"frame": 3,
					"margin": 5,
					"label": false,
					"vertical": false
				}
			}
		},
        {
            "name": "Identify",

            "cfg": {
                "showFullscreen": false,
                "dock": false,
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
        },{
			"name": "ZoomAll",
			"override": {
				"Toolbar": {
					"alwaysVisible": false
				}
			}
		}, {
			"name": "TOC",
			"cfg": {
				"activateMapTitle": false,
				"activateSettingsTool": false,
				"activateMetedataTool": false,
				"activateRemoveLayer": false
			}

		}, {
			"name": "Settings",
			"cfg": {
				"wrap": true
			}
		}, {
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
		"Cookie",
		"OmniBar",
		"Expander",
		"ScaleBox",
		"Undo",
		"Redo",
		"BurgerMenu",
		"MapFooter",
		"SearchServicesConfig",
		{
			"name": "Print",
			"cfg": {
				"disablePluginIf": "{state('mapType') === 'cesium'}",
				"useFixedScales": true,
				"mapPreviewOptions": {
					"enableScalebox": true,
					"enableRefresh": false
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
		}, {
			"name": "Measure"
		}, {
			"name": "ZoomOut",
			"override": {
				"Toolbar": {
					"alwaysVisible": true
				}
			}
		}
	]
}

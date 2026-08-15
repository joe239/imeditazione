$(function() {
            var plants = [{
                name2: 'Italia',
                name: '•',
                coords: [41.29246, 12.5736108],
                status: 'closed',
            },{
                name2: 'Germania',
                name: '•',
                coords: [51.1642292, 10.4541194],
                status: 'closed',
            },{
                name2: 'Lussemburgo',
                name: '•',
                coords: [49.8152995, 6.13332],
                status: 'closed',
            },{
                name2: 'Regno Unito',
                name: '•',
                coords: [55.3617609, -3.4433238],
                status: 'closed',
            },{
                name2: 'Paesi Bassi',
                name: '•',
                coords: [52.2129919, 5.2793703],
                status: 'closed',
            },{
                name2: 'Francia',
                name: '•',
                coords: [46.71109, 1.7191036],
                status: 'closed',
            },{
                name2: 'Svizzera',
                name: '•',
                coords: [46.8131873, 8.22421],
                status: 'closed',
            },{
                name2: 'Danimarca',
                name: '•',
                coords: [55.9396761, 9.5155848],
                status: 'closed',
            },{
                name2: 'Russia',
                name: '•',
                coords: [55.0, 103.0],
                status: 'closed',
            },{
                name2: 'Albania',
                name: '•',
                coords: [41.1529058, 20.1605717],
                status: 'closed',
            },{
                name2: 'Belgio',
                name: '•',
                coords: [50.5010789, 4.4764595],
                status: 'closed',
            },{
                name2: 'Finlandia',
                name: '•',
                coords: [64.9146659, 26.0672554],
                status: 'closed',
            },{
                name2: 'Grecia',
                name: '•',
                coords: [38.2749497, 23.8102717],
                status: 'closed',
            },{
                name2: 'Romania',
                name: '•',
                coords: [45.9442858, 25.0094303],
                status: 'closed',
            }, {
                name2: 'Canada',
                name: '•',
                coords: [65.090240, -110.712891],
                status: 'closed',
            }, {
                name2: 'USA',
                name: '•',
                coords: [45.090240, -100.712891],
                status: 'closed',
            }, {
                name2: 'Australia',
                name: '•',
                coords: [-26.4390917, 133.281323],
                status: 'closed',
            }];
            new jvm.Map({
                container: $('#map'),
                map: 'world_merc',
                markers: plants.map(function(h) {
                    return {
                        name: h.name2,
                        latLng: h.coords
                    }
                }),
                labels: {
                    markers: {
                        render: function(index) {
                            return plants[index].name;
                        },
                        offsets: function(index) {
                            var offset = plants[index]['offsets'] || [0, 0];
                            return [offset[0] - 7, offset[1] + 3];
                        }
                    }
                },
                zoomOnScroll: false,
                series: {
                    markers: [{
                        attribute: 'image',
                        scale: {
                            'closed': 'images/map-marker.png',
                            'activeUntil2018': 'images/map-marker.png',
                            'activeUntil2022': 'images/map-marker.png'
                        },
                        values: plants.reduce(function(p, c, i) {
                            p[i] = c.status;
                            return p
                        }, {}),
                    }]
                }
            });
        });
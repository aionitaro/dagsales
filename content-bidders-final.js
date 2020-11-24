<html>

    <head>
        <link rel="icon" type="image/png" href="/favicon.png">
        <script async src="//www.googletagservices.com/tag/js/gpt.js"></script>
        <script async src="//acdn.adnxs.com/prebid/not-for-prod/prebid.js"></script>
        <script>
        
            var PREBID_TIMEOUT = 1000;
            var FAILSAFE_TIMEOUT = 3000;

            var adUnits = [
                {
                    code: '/62727623/Antena3.ro-Content-Billboard',
                    mediaTypes: {
                        banner: {
                            sizeConfig: [
                                { minViewPort: [0, 0], sizes: [[300, 250]] },
                                { minViewPort: [980, 0], sizes: [[970,250],[728,90]] }
                            ]
                        }
                    },
                    bids: [
                        {bidder: 'adform', params: { mid: 888094} },
                        {bidder: 'adform', params: { mid: 888095} },
                        {"bidder":"criteo","params":{"networkId":8796}},
                        {bidder: 'smartadserver', params:{domain:'https://prg.smartadserver.com', siteId:'385896', pageId:'1332499', formatId:'94890'}},

                    ]
                },
                {
                    code: '/62727623/Antena3.ro-Content-Rectangle',
                    mediaTypes: {
                        banner: {
                            sizeConfig: [
                                { minViewPort: [0, 0], sizes: [[300, 250]] },
                                
                            ]                        }
                    },
                    bids: [
                        {bidder: 'adform', params: { mid: 888095} },
                        {"bidder":"criteo","params":{"networkId":8796}},
                        {bidder: 'smartadserver', params:{domain:'https://prg.smartadserver.com', siteId:'385896', pageId:'1332499', formatId:'94890'}}
                    ]
                },
                {
                    code: '/62727623/Antena3.ro-Content-580x400',
                    mediaTypes: {
                        banner: {
                            sizeConfig: [
                                { minViewPort: [0, 0], sizes: [[300, 250]] },
                                { minViewPort: [580, 0], sizes: [[580, 400], [300, 250]] }
                            ]                        }
                    },
                    bids: [
                        {bidder: 'adform', params: { mid: 888095} },
                        {"bidder":"criteo","params":{"networkId":8796}},
                        {bidder: 'smartadserver', params:{domain:'https://prg.smartadserver.com', siteId:'385896', pageId:'1332499', formatId:'94890'}},

                    ]
                },
                {
                    code: '/62727623/Antena3.ro-Content-Rectangle2',
                    mediaTypes: {
                        banner: {
                            sizeConfig: [
                                { minViewPort: [0, 0], sizes: [[300, 250]] },
                                { minViewPort: [980, 0], sizes: [[300,250],[300, 600] ] }
                            ]                        }
                    },
                    bids: [
                        {bidder: 'adform', params: { mid: 888095} },
                        {"bidder":"criteo","params":{"networkId":8796}},
                        {bidder: 'smartadserver', params:{domain:'https://prg.smartadserver.com', siteId:'385896', pageId:'1332499', formatId:'94890'}}  
                    ]
                },
                 {
                    code: '/62727623/Antena3.ro-HP-Rectangle2',
                    mediaTypes: {
                        banner: {
                            sizeConfig: [
                                { minViewPort: [0, 0], sizes: [[300, 250]] },
                                { minViewPort: [980, 0], sizes: [[300,250]] }
                            ]                        }
                    },
                    bids: [
                        {bidder: 'adform', params: { mid: 888095} },
                        {"bidder":"criteo","params":{"networkId":8796}},
                        {bidder: 'smartadserver', params:{domain:'https://prg.smartadserver.com', siteId:'385896', pageId:'1332499', formatId:'94890'}}  
                    ]
                }

            ];

            var customPriceGranularity = {
			'buckets': [
				{'precision': 2,'min': 0,'max': 3,'increment': 0.01},
				{'precision': 2,'min': 3,'max': 8,'increment': 0.05},
				{'precision': 2,'min': 8,'max': 50,'increment': 0.5}
			]
	    };


            // ======== DO NOT EDIT BELOW THIS LINE =========== //
            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];
            googletag.cmd.push(function() {
                googletag.pubads().disableInitialLoad();
            });

            var pbjs = pbjs || {};
            pbjs.que = pbjs.que || [];

            pbjs.que.push(function() {
                pbjs.addAdUnits(adUnits);
                pbjs.setConfig({
                	priceGranularity: customPriceGranularity
                });
                pbjs.requestBids({
                    bidsBackHandler: initAdserver,
                    timeout: PREBID_TIMEOUT
                });
            });

            function initAdserver() {
                if (pbjs.initAdserverSet) return;
                pbjs.initAdserverSet = true;
                googletag.cmd.push(function() {
                    pbjs.que.push(function() {
                        pbjs.setTargetingForGPTAsync();
                        googletag.pubads().refresh();
                    });
                });
            }
            // in case PBJS doesn't load
            setTimeout(function() {
                initAdserver();
            }, FAILSAFE_TIMEOUT);
</script>
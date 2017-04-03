.service("BusinessData", [function () {
    var businessData = [
    {
        id: 1,
        serviceId: 1,
        name: 'BreakOut',
        distance: 0.1,
        rating: 4
    }
];

    return {
        getAllBusinesses: function () {
            return businessData;
        },

        getSelectedBusiness: function(serviceId) {
            var businessList = [];
            serviceId = parseInt(serviceId);
            for(i=0;i<businessData.length;i++) {
                if(businessData[i].serviceId === serviceId) {
                    businessList.push(businessData[i]);
                }
            }
            return businessList;
        }
    }
}])

var someone = {
    name : "jangsoo",
    whoAmI : function() {
        console.log(this);
    }
};

someone.whoAmI();

var mywhoami = someone.whoAmI;
mywhoami();
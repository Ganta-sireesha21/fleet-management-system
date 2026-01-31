const supabase = require('../config/supabase');
exports.analytics = async (req, res) => {
    const customers=await supabase.from("users").select("*", {count:"exact"}).eq("role", "customer");
    const drivers=await supabase.from("users").select("*", {count:"exact"}).eq("role", "driver");
    const owners=await supabase.from("users").select("*", {count:"exact"}).eq("role", "owner");
    const vehicles=await supabase.from("vehicles").select("*", {count:"exact"});
    const trips=await supabase.from("trips").select("*", {count:"exact"});
    res.json({
        customers: customers.count,
        drivers: drivers.count,
        owners: owners.count,
        vehicles: vehicles.count,
        trips: trips.count  
    });     
};
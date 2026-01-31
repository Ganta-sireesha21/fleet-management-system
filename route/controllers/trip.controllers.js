const supabase = require('../config/supabase');
exports.createTrip = async (req, res) => {
    const {vehicle_id, passengers}=req.body;
    const {data:vehicle}=await supabase
        .from('vehicles')
        .select('*')
        .eq('id', vehicle_id)
        .single();
    if(!vehicle.isAvailable)
        return res.status(400).json({message: "Vehicle is not available"});
    if(passengers > vehicle.capacity)
        return res.status(400).json({message: "Number of passengers exceeds vehicle capacity"});                      
    await supabase
    .from('vehicles')
    .update({isAvailable: false})
    .eq('id', vehicle_id);
    const {error}=await supabase.from('trips').insert([req.body]);
    res.status(200).json({message: "Trip created successfully"});
};
exports.endTrip = async (req, res) => {
    const {id} = req.params;
    const {data:trip}=await supabase
        .from('trips')
        .select('*')
        .eq('id', id)
        .single();
    if(!trip){
        return res.status(404).json({message: "Trip not found"});
    }
    await supabase
        .from('vehicles')
        .update({isAvailable: true})
        .eq('id', trip.vehicle_id);
    const {error}=await supabase.from('trips').delete().eq('id', id);
    if(error){
        return res.status(500).json({message: "Error ending trip", error});
    }
    res.status(200).json({message: "Trip ended successfully"});
};

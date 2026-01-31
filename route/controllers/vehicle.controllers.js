const supabase = require('../config/supabase');
exports.addVehicle = async (req, res) => {
    const {role}=req.body;
    if(role !== "owner"){
        return res.status(403).json({message: "Only owners can add vehicles"});
    }
    const {error}=await supabase.from('vehicles').insert([req.body]);
    if(error){
        return res.status(500).json({message: "Error adding vehicle", error});
    } res.status(200).json({message: "Vehicle added successfully"});
};
exports.assignDriver = async (req, res) => {
    const {driver_id}=req.body;
    const {id} = req.params;
    const {error}=await supabase.from('vehicles').update({driver_id}).eq('id', id);
    if(error){
        return res.status(500).json({message: "Error assigning driver", error});
    } res.status(200).json({message: "Driver assigned successfully"});
};
exports.getVehicles = async (req, res) => {
    const {data, error}=await supabase.from('vehicles').select('*');
    if(error){
        return res.status(500).json({message: "Error fetching vehicles", error});
    } res.status(200).json({vehicles: data});
};      

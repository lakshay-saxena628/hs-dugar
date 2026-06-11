const fs = require('fs');

const categoriesFile = '/Users/lakshaysaxena/Desktop/hs-dugar/src/utils/categories.ts';
let content = fs.readFileSync(categoriesFile, 'utf8');

const imageMap = {
  'Low Pressure Extension Line': 'low_pressure_extension_line.jpeg',
  'High Pressure Extension Line': 'high_pressure_extension_line.jpeg',
  'PVC Free High Pressure Extension Line': 'PVC_free_high_pressure_extension_line.jpeg',
  'Central Venous Catheter': 'central_venous_catheter.jpeg',
  'Arterial Cannula': 'arterial_cannula.jpeg',
  'Huber Needle': 'huber_needle.jpeg',

  'Blood Bag': 'blood_bag.jpeg',
  'ACD Bag': 'ACD_blood_bag.jpeg',
  'Blood Bag with Safety Device and Sampling Bag': 'blood_bag_with_safety_device_and_sampling_bag.jpeg',
  'Blood Transfusion Set': 'blood_transfusion_set.jpeg',
  'Transfusion Pump Set': 'transfusion_pump_set.jpeg',

  'Urine Collection Bag with T-Type Bottom Outlet and Sampling Port': 'urine_collection_bag_with_T_type_bottom_outlet_and_sampling_port.jpeg',
  'Paediatric Urine Collection Bag': 'paediatric_urine_collection_bag.jpeg',
  'Foley Balloon Catheter': 'foley_balloon_catheter.jpeg',
  'Urine Collection Bag': 'urine_collection_bag.jpeg',

  'Ryles Tube': 'ryles_tube.jpeg',
  'Ryles Tube with Enteral Connector': 'ryle_tube_with_enteral_connector.jpeg',
  'Umbilical Catheter': 'umbilical_catheter.jpeg',
  'Feeding Bag': 'feeding_bag.jpeg',

  'Venturi Mask': 'venturi_mask.jpeg',
  'Spinal Needle': 'spinal_needle.jpeg',
  'Oxygen Mask with Reservoir': 'oxygen_mask_with_reservoir.jpeg',
  'Bain Circuits': 'bain_circuits.jpeg',
  'Endotracheal Tube': 'endotracheal_tube.jpeg',
  'Guedel Airway': 'guedel_airway.jpeg',
  'HME Filter': 'hme_filter.jpeg',
  'Mucus Extractor': 'mucus_extractor.jpeg',
  'Nasal Oxygen Cannula': 'nasal_oxygen_cannula.jpeg',
  'Suction Catheters': '/placeholder.jpg',

  'IV Cannula Winged and Non-Winged with Port': 'iv_cannula_winged_with_port.jpeg',
  'IV Cannula without Port and without Wings': 'Iv_cannula_without_wing_and_without_port.jpeg',
  'IV Cannula without Port and Small Wings': 'Iv_cannula_winged_without_port.jpeg',
  'IV Cannula with Integrated Three-Way Stop Cock': 'Iv_cannula_with_integrated_three_way_stopcock.jpeg',
  'Arterial Catheter': '/placeholder.jpg',
  'Cannula Fixator': 'cannula_fixator.jpeg',
  'Luer Lock': '/placeholder.jpg',

  'Safety Blood Collection Set': 'safety_blood_collection_set.jpeg',
  'Vacutainer - ESR (Black)': 'esr(erythrocyte-sedimentation-rate)_tubes.jpeg',
  'Vacutainer - CPDA (Yellow)': 'CPDA_tube.jpeg',
  'Vacutainer - Lithium Heparin (Green)': 'lithium_heparin_tube.jpeg',
  'Vacutainer - Sodium Heparin (Green)': '/placeholder.jpg',
  'Vacutainer - Glucose (Grey)': 'glucose_estimation_tube.jpeg',
  'Vacutainer - Citrate (Blue)': 'citrate_tube.jpeg',
  'Vacutainer - Serum (Red)': 'serum_tube.jpeg',

  'Everolimus Eluting Coronary Stent': 'everolimus_eluting_stent.jpeg',
  'Sirolimus Eluting Coronary Stent': 'sirolimus_eluting_coronary_stent.jpeg',
  'Electrocardiograph Electrodes': 'electrocardiograph_electrodes.jpeg',
  'Balloon Inflation Device': 'PTCA_ballon_dialation_catheter.jpeg',
  'Guiding Wire': 'guiding_catheter.jpeg',
  'PTFE Wire': 'PTFE_guide_wire.jpeg',

  'IV Infusion Line': 'iv_infusion set.jpeg',
  'Syringes and Needles': 'syringes_and_needles.jpeg',
  'Gloves': 'gloves.jpeg',
  'Sutures': '/placeholder.jpg',
  'Surgical Gowns': 'surgical_gowns.jpeg',
  'Surgical Bedsheet': 'disposable_bedsheet.jpeg',
  'Mask': 'mask.jpeg',
  'Shoe Cover and Cap': 'shoecover.jpeg'
};

const updatedContent = content.replace(/name:\s*'([^']+)',\s*description:\s*'([^']+)',\s*imagePlaceholder:\s*'\/placeholder.jpg'/g, (match, name, description) => {
  const imageName = imageMap[name];
  if (imageName && imageName !== '/placeholder.jpg') {
    // Add prefix to imported assets usually or use direct relative path? 
    // Wait, let's see how images are loaded in the product cards first.
    return `name: '${name}',\n        description: '${description}',\n        imagePlaceholder: '/assets/${imageName}'`;
  }
  return match;
});

fs.writeFileSync(categoriesFile, updatedContent, 'utf8');
console.log('Done mapping images.');


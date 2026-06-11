import { 
  HeartPulse, 
  Droplet, 
  FlaskConical, 
  Stethoscope, 
  Wind, 
  Syringe, 
  Microscope, 
  Heart, 
  Package 
} from 'lucide-react';
import React from 'react';
import img_sutures from '@/assets/sutures.png';

import img_suction from '@/assets/suction_catheter.jpeg';
import img_luer_lock from '@/assets/luer_lock.png';
import img_arterial_cath from '@/assets/arterial_catheter.png';
import img_sodium_heparin from '@/assets/sodium_heparin_tube.png';


import img_1 from '@/assets/low_pressure_extension_line.jpeg';
import img_2 from '@/assets/high_pressure_extension_line.jpeg';
import img_3 from '@/assets/PVC_free_high_pressure_extension_line.jpeg';
import img_4 from '@/assets/central_venous_catheter.jpeg';
import img_5 from '@/assets/arterial_cannula.jpeg';
import img_6 from '@/assets/huber_needle.jpeg';
import img_7 from '@/assets/blood_bag.jpeg';
import img_8 from '@/assets/ACD_blood_bag.jpeg';
import img_9 from '@/assets/blood_bag_with_safety_device_and_sampling_bag.jpeg';
import img_10 from '@/assets/blood_transfusion_set.jpeg';
import img_11 from '@/assets/transfusion_pump_set.jpeg';
import img_12 from '@/assets/urine_collection_bag_with_T_type_bottom_outlet_and_sampling_port.jpeg';
import img_13 from '@/assets/paediatric_urine_collection_bag.jpeg';
import img_14 from '@/assets/foley_balloon_catheter.jpeg';
import img_15 from '@/assets/urine_collection_bag.jpeg';
import img_16 from '@/assets/ryles_tube.jpeg';
import img_17 from '@/assets/ryle_tube_with_enteral_connector.jpeg';
import img_18 from '@/assets/umbilical_catheter.jpeg';
import img_19 from '@/assets/feeding_bag.jpeg';
import img_20 from '@/assets/venturi_mask.jpeg';
import img_21 from '@/assets/spinal_needle.jpeg';
import img_22 from '@/assets/oxygen_mask_with_reservoir.jpeg';
import img_23 from '@/assets/bain_circuits.jpeg';
import img_24 from '@/assets/endotracheal_tube.jpeg';
import img_25 from '@/assets/guedel_airway.jpeg';
import img_26 from '@/assets/hme_filter.jpeg';
import img_27 from '@/assets/mucus_extractor.jpeg';
import img_28 from '@/assets/nasal_oxygen_cannula.jpeg';
import img_29 from '@/assets/iv_cannula_winged_with_port.jpeg';
import img_30 from '@/assets/Iv_cannula_without_wing_and_without_port.jpeg';
import img_31 from '@/assets/Iv_cannula_winged_without_port.jpeg';
import img_32 from '@/assets/Iv_cannula_with_integrated_three_way_stopcock.jpeg';
import img_33 from '@/assets/cannula_fixator.jpeg';
import img_34 from '@/assets/safety_blood_collection_set.jpeg';
import img_35 from '@/assets/esr(erythrocyte-sedimentation-rate)_tubes.jpeg';
import img_36 from '@/assets/CPDA_tube.jpeg';
import img_37 from '@/assets/lithium_heparin_tube.jpeg';
import img_38 from '@/assets/glucose_estimation_tube.jpeg';
import img_39 from '@/assets/citrate_tube.jpeg';
import img_40 from '@/assets/serum_tube.jpeg';
import img_41 from '@/assets/everolimus_eluting_stent.jpeg';
import img_42 from '@/assets/sirolimus_eluting_coronary_stent.jpeg';
import img_43 from '@/assets/electrocardiograph_electrodes.jpeg';
import img_44 from '@/assets/PTCA_ballon_dialation_catheter.jpeg';
import img_45 from '@/assets/guiding_catheter.jpeg';
import img_46 from '@/assets/PTFE_guide_wire.jpeg';
import img_47 from '@/assets/iv_infusion set.jpeg';
import img_48 from '@/assets/syringes_and_needles.jpeg';
import img_49 from '@/assets/gloves.jpeg';
import img_50 from '@/assets/surgical_gowns.jpeg';
import img_51 from '@/assets/disposable_bedsheet.jpeg';
import img_52 from '@/assets/mask.jpeg';
import img_53 from '@/assets/shoecover.jpeg';

export interface Product {
  id: string;
  name: string;
  description: string;
  imagePlaceholder: string;
  features: string[];
  certifications: string[];
  specs: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: React.ElementType;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Critical Care',
    slug: 'critical-care',
    description: 'Advanced devices used in intensive and critical care procedures.',
    icon: HeartPulse,
    products: [
      {
        id: 'cc-1',
        name: 'Low Pressure Extension Line',
        description: 'Designed for safe and reliable delivery of fluids in low-pressure applications.',
        imagePlaceholder: img_1.src,
        features: ['Flexible and kink-resistant', 'Luer lock connectors', 'Transparent for easy monitoring'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Length': '10cm - 200cm', 'Material': 'Medical Grade PVC' }
      },
      {
        id: 'cc-2',
        name: 'High Pressure Extension Line',
        description: 'Engineered to withstand high pressures during rapid fluid administration.',
        imagePlaceholder: img_2.src,
        features: ['High burst strength', 'Secure connections', 'Durable material'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Pressure Rating': 'Up to 500 PSI', 'Material': 'Polycarbonate / PVC' }
      },
      {
        id: 'cc-3',
        name: 'PVC Free High Pressure Extension Line',
        description: 'PVC-free extension line for specialized critical care applications.',
        imagePlaceholder: img_3.src,
        features: ['DEHP-free', 'High pressure resistant', 'Biocompatible'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO', 'Latex Free'],
        specs: { 'Pressure Rating': 'Up to 500 PSI', 'Material': 'Polyurethane' }
      },
      {
        id: 'cc-4',
        name: 'Central Venous Catheter',
        description: 'Multi-lumen catheter for central venous access in critical care.',
        imagePlaceholder: img_4.src,
        features: ['Soft tip', 'Radiopaque', 'Multiple lumens'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Size': '4Fr - 12Fr', 'Lumens': 'Single, Double, Triple' }
      },
      {
        id: 'cc-5',
        name: 'Arterial Cannula',
        description: 'For continuous arterial pressure monitoring and blood sampling.',
        imagePlaceholder: img_5.src,
        features: ['Floswitch option', 'Smooth insertion', 'Secure fixation'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Gauge': '18G, 20G, 22G', 'Material': 'Teflon/FEP' }
      },
      {
        id: 'cc-6',
        name: 'Huber Needle',
        description: 'Specialized needle for accessing implanted ports without coring the septum.',
        imagePlaceholder: img_6.src,
        features: ['Non-coring design', 'Color-coded', 'Right-angle option'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Gauge': '19G - 22G', 'Length': '15mm - 35mm' }
      }
    ]
  },
  {
    id: '2',
    name: 'Transfusion System',
    slug: 'transfusion-system',
    description: 'Reliable blood collection and transfusion solutions.',
    icon: Droplet,
    products: [
      {
        id: 'ts-1',
        name: 'Blood Bag',
        description: 'High-quality blood collection bags for safe storage and handling.',
        imagePlaceholder: img_7.src,
        features: ['Ultra-thin wall needle', 'Tamper-evident port', 'Rounded corners'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Capacity': '250ml - 500ml', 'Type': 'Single, Double, Triple, Quadruple' }
      },
      {
        id: 'ts-2',
        name: 'ACD Bag',
        description: 'Blood bags containing Acid Citrate Dextrose for specific blood component processing.',
        imagePlaceholder: img_8.src,
        features: ['Optimal cell preservation', 'Clear volume graduation', 'Secure sealing'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Anticoagulant': 'ACD Solution', 'Capacity': 'Variable' }
      },
      {
        id: 'ts-3',
        name: 'Blood Bag with Safety Device and Sampling Bag',
        description: 'Advanced blood collection system with integrated safety and sampling features.',
        imagePlaceholder: img_9.src,
        features: ['Needle stick injury prevention', 'Pre-donation sampling', 'High efficiency'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Safety Feature': 'Integrated Needle Guard', 'Sampling Volume': '30ml' }
      },
      {
        id: 'ts-4',
        name: 'Blood Transfusion Set',
        description: 'Precision sets designed for the safe transfusion of blood and blood components.',
        imagePlaceholder: img_10.src,
        features: ['200 micron filter', 'Roller clamp', 'Luer lock connector'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Drop Rate': '20 drops/ml', 'Tube Length': '150cm' }
      },
      {
        id: 'ts-5',
        name: 'Transfusion Pump Set',
        description: 'Sets compatible with infusion pumps for controlled blood delivery.',
        imagePlaceholder: img_11.src,
        features: ['Pump compatible tubing', 'Precision control', 'Air venting'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Compatibility': 'Universal/Specific Brands', 'Material': 'Medical Grade PVC' }
      }
    ]
  },
  {
    id: '3',
    name: 'Urology',
    slug: 'urology',
    description: 'Specialized urinary drainage and catheterization products.',
    icon: FlaskConical,
    products: [
      {
        id: 'ur-1',
        name: 'Urine Collection Bag with T-Type Bottom Outlet and Sampling Port',
        description: 'Premium collection bag with convenient drainage and hygienic sampling.',
        imagePlaceholder: img_12.src,
        features: ['Needle-free sampling port', 'T-valve drainage', 'Anti-reflux valve'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Capacity': '2000ml', 'Tube Length': '90cm - 120cm' }
      },
      {
        id: 'ur-2',
        name: 'Paediatric Urine Collection Bag',
        description: 'Gentle and secure collection bags designed specifically for pediatric patients.',
        imagePlaceholder: img_13.src,
        features: ['Hypoallergenic adhesive', 'Clear graduation', 'Comfortable fit'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO', 'Latex Free'],
        specs: { 'Capacity': '100ml - 200ml', 'Gender': 'Male/Female/Unisex' }
      },
      {
        id: 'ur-3',
        name: 'Foley Balloon Catheter',
        description: 'Indwelling catheter for urinary drainage with secure balloon retention.',
        imagePlaceholder: img_14.src,
        features: ['Smooth surface', 'Symmetrical balloon', 'Color-coded valve'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Size': '8Fr - 24Fr', 'Material': 'Latex with Silicone Coating / 100% Silicone' }
      },
      {
        id: 'ur-4',
        name: 'Urine Collection Bag',
        description: 'Standard collection bag for reliable fluid management.',
        imagePlaceholder: img_15.src,
        features: ['Clear volume scale', 'Secure connectors', 'Durable material'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Capacity': '2000ml', 'Drainage Type': 'Push-Pull / Screw' }
      }
    ]
  },
  {
    id: '4',
    name: 'Gastroenterology',
    slug: 'gastroenterology',
    description: 'Products for enteral feeding and gastrointestinal access.',
    icon: Stethoscope,
    products: [
      {
        id: 'ge-1',
        name: 'Ryles Tube',
        description: 'Nasogastric tube for feeding and gastric aspiration.',
        imagePlaceholder: img_16.src,
        features: ['Radiopaque line', 'Smooth tip', 'Clear graduation'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Size': '8Fr - 20Fr', 'Length': '105cm' }
      },
      {
        id: 'ge-2',
        name: 'Ryles Tube with Enteral Connector',
        description: 'Enhanced Ryles tube featuring a specialized enteral connector for safe feeding.',
        imagePlaceholder: img_17.src,
        features: ['ENFit compatible', 'Radiopaque line', 'Color-coded'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Size': '8Fr - 20Fr', 'Connector': 'Enteral Specific' }
      },
      {
        id: 'ge-3',
        name: 'Umbilical Catheter',
        description: 'For access to umbilical vessels in neonatal intensive care.',
        imagePlaceholder: img_18.src,
        features: ['Soft rounded tip', 'Clear depth markings', 'Radiopaque'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Size': '3.5Fr, 5.0Fr, 8.0Fr', 'Material': 'Polyurethane/PVC' }
      },
      {
        id: 'ge-4',
        name: 'Feeding Bag',
        description: 'Bags for the administration of enteral nutrition.',
        imagePlaceholder: img_19.src,
        features: ['Large capacity', 'Clear graduation', 'Drip chamber'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Capacity': '1000ml - 1200ml', 'Connector': 'Enteral/Luer' }
      }
    ]
  },
  {
    id: '5',
    name: 'Anesthesia & Respiratory Care',
    slug: 'anesthesia-and-respiratory-care',
    description: 'Devices supporting anesthesia and respiratory management.',
    icon: Wind,
    products: [
      {
        id: 'ar-1',
        name: 'Venturi Mask',
        description: 'For delivery of controlled and accurate oxygen concentrations.',
        imagePlaceholder: img_20.src,
        features: ['Color-coded diluters', 'Adjustable nose clip', 'Comfortable fit'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Concentration': '24% - 60%', 'Size': 'Adult, Pediatric' }
      },
      {
        id: 'ar-2',
        name: 'Spinal Needle',
        description: 'Precision needles for spinal anesthesia and lumbar puncture.',
        imagePlaceholder: img_21.src,
        features: ['Quincke bevel', 'Clear hub', 'Color-coded stylet'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Gauge': '18G - 27G', 'Length': '90mm' }
      },
      {
        id: 'ar-3',
        name: 'Oxygen Mask with Reservoir',
        description: 'High concentration oxygen mask for critical respiratory support.',
        imagePlaceholder: img_22.src,
        features: ['Reservoir bag', 'Non-rebreathing valves', 'Adjustable strap'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Size': 'Adult, Pediatric', 'Bag Capacity': '600ml - 1000ml' }
      },
      {
        id: 'ar-4',
        name: 'Bain Circuits',
        description: 'Coaxial breathing circuits for efficient gas delivery during anesthesia.',
        imagePlaceholder: img_23.src,
        features: ['Lightweight', 'Low resistance', 'Integrated fresh gas line'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Length': '1.5m - 1.8m', 'Type': 'Adult, Pediatric' }
      },
      {
        id: 'ar-5',
        name: 'Endotracheal Tube',
        description: 'Airway management tube for intubation and mechanical ventilation.',
        imagePlaceholder: img_24.src,
        features: ['High volume low pressure cuff', 'Murphy eye', 'Radiopaque line'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Size': '2.0mm - 10.0mm ID', 'Type': 'Cuffed, Uncuffed' }
      },
      {
        id: 'ar-6',
        name: 'Guedel Airway',
        description: 'Oropharyngeal airway to maintain patency in unconscious patients.',
        imagePlaceholder: img_25.src,
        features: ['Color-coded bite block', 'Smooth edges', 'Rigid core'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Size': '000 - 5', 'Length': '40mm - 110mm' }
      },
      {
        id: 'ar-7',
        name: 'HME Filter',
        description: 'Heat and Moisture Exchanger filter to protect airway and maintain humidity.',
        imagePlaceholder: img_26.src,
        features: ['High filtration efficiency', 'Low dead space', 'Moisture return'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Filtration': 'Bacterial/Viral > 99.99%', 'Tidal Volume': '150-1500ml' }
      },
      {
        id: 'ar-8',
        name: 'Mucus Extractor',
        description: 'Device for aspirating secretions from the oropharynx in newborns.',
        imagePlaceholder: img_27.src,
        features: ['Clear container', 'Soft suction catheter', 'Spare cap'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Capacity': '25ml', 'Catheter Size': '10Fr, 14Fr' }
      },
      {
        id: 'ar-9',
        name: 'Nasal Oxygen Cannula',
        description: 'Comfortable prongs for low-flow oxygen delivery.',
        imagePlaceholder: img_28.src,
        features: ['Soft prongs', 'Kink-resistant tubing', 'Over-ear design'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Size': 'Adult, Pediatric, Neonatal', 'Length': '2m' }
      },
      {
        id: 'ar-10',
        name: 'Suction Catheters',
        description: 'Flexible catheters for the removal of respiratory secretions.',
        imagePlaceholder: img_suction.src,
        features: ['Color-coded connector', 'Smooth tip', 'Thumb control valve'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Size': '6Fr - 18Fr', 'Length': '50cm' }
      }
    ]
  },
  {
    id: '6',
    name: 'Vascular Access',
    slug: 'vascular-access',
    description: 'Comprehensive vascular access and infusion products.',
    icon: Syringe,
    products: [
      {
        id: 'va-1',
        name: 'IV Cannula Winged and Non-Winged with Port',
        description: 'Intravenous cannulas available in multiple configurations for versatile access.',
        imagePlaceholder: img_29.src,
        features: ['Injection port', 'Radiopaque', 'Color-coded'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Gauge': '14G - 26G', 'Material': 'PTFE/FEP/PUR' }
      },
      {
        id: 'va-2',
        name: 'IV Cannula without Port and without Wings',
        description: 'Streamlined cannula design for specific clinical applications.',
        imagePlaceholder: img_30.src,
        features: ['Straight hub', 'Smooth insertion', 'Transparent flashback chamber'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Gauge': '16G - 24G', 'Type': 'Pen-like' }
      },
      {
        id: 'va-3',
        name: 'IV Cannula without Port and Small Wings',
        description: 'Cannula offering secure fixation with a minimal footprint.',
        imagePlaceholder: img_31.src,
        features: ['Small wings', 'Low profile', 'Sharp bevel'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Gauge': '18G - 24G', 'Wings': 'Flexible' }
      },
      {
        id: 'va-4',
        name: 'IV Cannula with Integrated Three-Way Stop Cock',
        description: 'Cannula providing immediate multi-channel access upon insertion.',
        imagePlaceholder: img_32.src,
        features: ['Integrated stopcock', 'Multiple fluid paths', 'Secure connection'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Gauge': '18G - 22G', 'Valve': '360 degree rotation' }
      },
      {
        id: 'va-5',
        name: 'Arterial Catheter',
        description: 'Catheters designed for arterial line placement and monitoring.',
        imagePlaceholder: img_arterial_cath.src,
        features: ['Floswitch', 'Smooth transition', 'Kink resistant'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Gauge': '20G, 22G', 'Material': 'Polyurethane' }
      },
      {
        id: 'va-6',
        name: 'Cannula Fixator',
        description: 'Adhesive dressings for secure and sterile cannula fixation.',
        imagePlaceholder: img_33.src,
        features: ['Breathable', 'Transparent window', 'Strong adhesion'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Material': 'Non-woven / PU film', 'Size': 'Standard/Pediatric' }
      },
      {
        id: 'va-7',
        name: 'Luer Lock',
        description: 'Standardized connectors to ensure secure, leak-free connections.',
        imagePlaceholder: img_luer_lock.src,
        features: ['Universal compatibility', 'Secure threading', 'Medical grade plastic'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Type': 'Male / Female', 'Material': 'Polycarbonate' }
      }
    ]
  },
  {
    id: '7',
    name: 'Diagnostics',
    slug: 'diagnostics',
    description: 'Blood collection and diagnostic consumables.',
    icon: Microscope,
    products: [
      {
        id: 'di-1',
        name: 'Safety Blood Collection Set',
        description: 'Winged collection set with an integrated safety shield to prevent needle sticks.',
        imagePlaceholder: img_34.src,
        features: ['Push-button safety', 'Flexible tubing', 'Clear flashback'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Gauge': '21G, 23G, 25G', 'Tube Length': '7", 12"' }
      },
      {
        id: 'di-2',
        name: 'Vacutainer - ESR (Black)',
        description: 'Evacuated tubes containing sodium citrate for erythrocyte sedimentation rate testing.',
        imagePlaceholder: img_35.src,
        features: ['Accurate draw volume', 'Color-coded cap', 'Glass/PET options'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Additive': '3.2% Sodium Citrate', 'Draw Volume': '1.6ml - 2.4ml' }
      },
      {
        id: 'di-3',
        name: 'Vacutainer - CPDA (Yellow)',
        description: 'Tubes with CPDA solution for blood bank studies and cell preservation.',
        imagePlaceholder: img_36.src,
        features: ['Cell preservation', 'Color-coded cap', 'Sterile interior'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Additive': 'CPDA-1', 'Draw Volume': '8.5ml' }
      },
      {
        id: 'di-4',
        name: 'Vacutainer - Lithium Heparin (Green)',
        description: 'Plasma determination tubes for clinical chemistry.',
        imagePlaceholder: img_37.src,
        features: ['Rapid plasma separation', 'Color-coded cap', 'Available with gel separator'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Additive': 'Lithium Heparin', 'Draw Volume': '2ml - 10ml' }
      },
      {
        id: 'di-5',
        name: 'Vacutainer - Sodium Heparin (Green)',
        description: 'Plasma determination tubes for trace element testing.',
        imagePlaceholder: img_sodium_heparin.src,
        features: ['Low background trace elements', 'Color-coded cap', 'Reliable performance'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Additive': 'Sodium Heparin', 'Draw Volume': '2ml - 10ml' }
      },
      {
        id: 'di-6',
        name: 'Vacutainer - Glucose (Grey)',
        description: 'Tubes containing fluoride to inhibit glycolysis for glucose testing.',
        imagePlaceholder: img_38.src,
        features: ['Glycolysis inhibition', 'Color-coded cap', 'Accurate results'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Additive': 'Sodium Fluoride/Potassium Oxalate', 'Draw Volume': '2ml - 4ml' }
      },
      {
        id: 'di-7',
        name: 'Vacutainer - Citrate (Blue)',
        description: 'Tubes containing sodium citrate for coagulation testing.',
        imagePlaceholder: img_39.src,
        features: ['Precise fill ratio', 'Color-coded cap', 'Double-walled design option'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Additive': '3.2% or 3.8% Sodium Citrate', 'Draw Volume': '1.8ml - 2.7ml' }
      },
      {
        id: 'di-8',
        name: 'Vacutainer - Serum (Red)',
        description: 'Tubes with or without clot activator for serum determination.',
        imagePlaceholder: img_40.src,
        features: ['Rapid clotting', 'Color-coded cap', 'Clean serum separation'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Additive': 'Clot Activator (Silica)', 'Draw Volume': '2ml - 10ml' }
      }
    ]
  },
  {
    id: '8',
    name: 'Cardiology',
    slug: 'cardiology',
    description: 'Interventional cardiology and monitoring products.',
    icon: Heart,
    products: [
      {
        id: 'ca-1',
        name: 'Everolimus Eluting Coronary Stent',
        description: 'Advanced drug-eluting stent for the treatment of coronary artery disease.',
        imagePlaceholder: img_41.src,
        features: ['Ultra-thin struts', 'Controlled drug release', 'Excellent deliverability'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Drug': 'Everolimus', 'Material': 'Cobalt Chromium' }
      },
      {
        id: 'ca-2',
        name: 'Sirolimus Eluting Coronary Stent',
        description: 'Drug-eluting stent designed to inhibit restenosis in coronary lesions.',
        imagePlaceholder: img_42.src,
        features: ['Proven efficacy', 'Biodegradable polymer', 'Flexible design'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Drug': 'Sirolimus', 'Material': 'Cobalt Chromium / Stainless Steel' }
      },
      {
        id: 'ca-3',
        name: 'Electrocardiograph Electrodes',
        description: 'Adhesive electrodes for accurate ECG monitoring and recording.',
        imagePlaceholder: img_43.src,
        features: ['High conductivity', 'Hypoallergenic adhesive', 'Ag/AgCl sensor'],
        certifications: ['ISO 13485', 'CE'],
        specs: { 'Size': 'Adult / Pediatric', 'Type': 'Foam / Cloth / Clear Tape' }
      },
      {
        id: 'ca-4',
        name: 'Balloon Inflation Device',
        description: 'Precision device for inflating angioplasty balloons and deploying stents.',
        imagePlaceholder: img_44.src,
        features: ['Ergonomic handle', 'Accurate pressure gauge', 'Quick release mechanism'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Pressure Capacity': 'Up to 30 ATM', 'Volume': '20ml' }
      },
      {
        id: 'ca-5',
        name: 'Guiding Wire',
        description: 'Wires designed to navigate tortuous vasculature during interventions.',
        imagePlaceholder: img_45.src,
        features: ['Excellent torque control', 'Radiopaque tip', 'Hydrophilic coating option'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Diameter': '0.014"', 'Length': '190cm - 300cm' }
      },
      {
        id: 'ca-6',
        name: 'PTFE Wire',
        description: 'Guidewires with a PTFE coating for smooth tracking and device delivery.',
        imagePlaceholder: img_46.src,
        features: ['Low friction', 'Kink resistance', 'Core-to-tip design'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Diameter': '0.035", 0.038"', 'Length': '150cm - 260cm' }
      }
    ]
  },
  {
    id: '9',
    name: 'Others',
    slug: 'others',
    description: 'General medical consumables and surgical essentials.',
    icon: Package,
    products: [
      {
        id: 'ot-1',
        name: 'IV Infusion Line',
        description: 'Standard extension lines for versatile intravenous fluid administration.',
        imagePlaceholder: img_47.src,
        features: ['Luer lock', 'Flexible tubing', 'Transparent'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Length': '10cm - 200cm', 'Material': 'PVC' }
      },
      {
        id: 'ot-2',
        name: 'Syringes and Needles',
        description: 'A complete range of disposable syringes and hypodermic needles.',
        imagePlaceholder: img_48.src,
        features: ['Smooth plunger', 'Clear scale', 'Sharp bevel'],
        certifications: ['ISO 13485', 'CE', 'Sterile EO'],
        specs: { 'Capacity': '1ml - 50ml', 'Needle Gauge': '18G - 30G' }
      },
      {
        id: 'ot-3',
        name: 'Gloves',
        description: 'Surgical and examination gloves for protection and hygiene.',
        imagePlaceholder: img_49.src,
        features: ['Textured fingertips', 'Tear resistant', 'Comfortable fit'],
        certifications: ['ISO 13485', 'CE'],
        specs: { 'Material': 'Latex / Nitrile / Vinyl', 'Type': 'Powdered / Powder-Free' }
      },
      {
        id: 'ot-4',
        name: 'Sutures',
        description: 'Surgical threads for wound closure and tissue approximation.',
        imagePlaceholder: img_sutures.src,
        features: ['High tensile strength', 'Smooth tissue passage', 'Secure knotting'],
        certifications: ['ISO 13485', 'CE', 'Sterile'],
        specs: { 'Type': 'Absorbable / Non-Absorbable', 'Material': 'Silk, Catgut, Vicryl, Prolene' }
      },
      {
        id: 'ot-5',
        name: 'Surgical Gowns',
        description: 'Protective apparel designed to maintain a sterile field during surgery.',
        imagePlaceholder: img_50.src,
        features: ['Fluid resistant', 'Breathable', 'Secure tie closures'],
        certifications: ['ISO 13485', 'CE'],
        specs: { 'Material': 'SMS / Spunlace', 'Protection Level': 'AAMI Level 1-4' }
      },
      {
        id: 'ot-6',
        name: 'Surgical Bedsheet',
        description: 'Disposable and reusable sheets for patient beds in surgical settings.',
        imagePlaceholder: img_51.src,
        features: ['Absorbent', 'Impermeable backing', 'Durable'],
        certifications: ['ISO 13485', 'CE'],
        specs: { 'Material': 'Non-woven / SMS', 'Size': 'Standard Bed Size' }
      },
      {
        id: 'ot-7',
        name: 'Mask',
        description: 'Medical face masks for respiratory protection and source control.',
        imagePlaceholder: img_52.src,
        features: ['High BFE', 'Adjustable nose piece', 'Comfortable ear loops'],
        certifications: ['ISO 13485', 'CE'],
        specs: { 'Type': '3-Ply / N95 / FFP2', 'Filtration': '>95% or >99%' }
      },
      {
        id: 'ot-8',
        name: 'Shoe Cover and Cap',
        description: 'Disposable covers to maintain hygiene and prevent contamination in clean areas.',
        imagePlaceholder: img_53.src,
        features: ['Elastic band', 'Anti-slip (shoe covers)', 'Breathable'],
        certifications: ['ISO 13485', 'CE'],
        specs: { 'Material': 'Non-woven PP', 'Size': 'Universal' }
      }
    ]
  }
];

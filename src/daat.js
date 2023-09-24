{
    "error": false,
    "message": "Successfully fetched rule config.",
    "data": {
        "ruleConfig": [
            {
                "type": "autocomplete",
                "name": "businessType",
                "options": [
                    {
                        "value": "Brand New",
                        "label": "Brand New"
                    },
                    {
                        "value": "Roll Over",
                        "label": "Roll Over"
                    },
                    {
                        "value": "Renewal",
                        "label": "Renewal"
                    },
                    {
                        "value": "all",
                        "label": "All"
                    }
                ],
                "label": "Business Type",
                "data": []
            },
            {
                "type": "autocomplete",
                "name": "Make",
                "driverOf": "Model",
                "options": [
                    {
                        "value": "Tata",
                        "label": "Tata"
                    },
                    {
                        "value": "Maruti",
                        "label": "Maruti"
                    },
                    {
                        "value": "all",
                        "label": "All"
                    }
                ],
                "label": "Make",
                "data": []
            },
            {
                "type": "autocomplete",
                "name": "Model",
                "dependentOn": "Make",
                "options": [
                    {
                        "value": "Swift",
                        "label": "Swift",
                        "driverField": "Maruti",
                        "pos": 1
                    },
                    {
                        "value": "Baleno",
                        "label": "Baleno",
                        "driverField": "Maruti",
                        "pos": 2
                    },
                    {
                        "value": "Nexon",
                        "label": "Nexon",
                        "driverField": "Tata",
                        "pos": 3
                    },
                    {
                        "value": "Tiago",
                        "label": "Tiago",
                        "driverField": "Tata",
                        "pos": 4
                    },
                    {
                        "value": "all",
                        "label": "All",
                        "driverField": null,
                        "pos": 5
                    }
                ],
                "label": "Model",
                "data": []
            },
            {
                "type": "autocomplete",
                "name": "cubicCapacity",
                "options": [
                    {
                        "value": "all",
                        "label": "All"
                    }
                ],
                "label": "Cubic Capacity",
                "data": []
            },
            {
                "type": "autocomplete",
                "name": "segment",
                "options": [
                    {
                        "value": "Compact",
                        "label": "Compact"
                    },
                    {
                        "value": "Mpv Suv",
                        "label": "Mpv Suv"
                    },
                    {
                        "value": "Mid Size",
                        "label": "Mid Size"
                    },
                    {
                        "value": "Ultra High End",
                        "label": "Ultra High End"
                    },
                    {
                        "value": "Mini",
                        "label": "Mini"
                    },
                    {
                        "value": "High End",
                        "label": "High End"
                    },
                    {
                        "value": "Quadricycle",
                        "label": "Quadricycle"
                    },
                    {
                        "value": "Rest All",
                        "label": "Rest All"
                    },
                    {
                        "value": "all",
                        "label": "All"
                    }
                ],
                "label": "Segment",
                "data": []
            },
            {
                "type": "autocomplete",
                "name": "vehicleClass",
                "options": [
                    {
                        "value": "all",
                        "label": "All"
                    }
                ],
                "label": "Vehicle Class",
                "data": []
            },
            {
                "type": "autocomplete",
                "name": "fuelType",
                "options": [
                    {
                        "value": "all",
                        "label": "All"
                    },
                    {
                        "value": "Diesel",
                        "label": "Diesel"
                    },
                    {
                        "value": "CNG",
                        "label": "CNG"
                    },
                    {
                        "value": "Electric",
                        "label": "Electric"
                    },
                    {
                        "value": "Other Than Diesel",
                        "label": "Other Than Diesel"
                    }
                ],
                "label": "Fuel Type",
                "data": []
            },
            {
                "type": "autocomplete",
                "name": "sectionText",
                "options": [
                    {
                        "value": "all",
                        "label": "All"
                    },
                    {
                        "value": "Package",
                        "label": "Package"
                    },
                    {
                        "value": "SAOD",
                        "label": "SAOD"
                    },
                    {
                        "value": "SATP",
                        "label": "SATP"
                    }
                ],
                "label": "Section Text",
                "data": []
            },
            {
                "type": "autocomplete",
                "name": "rto",
                "options": [
                    {
                        "value": "all",
                        "label": "All"
                    },
                    {
                        "value": "ROWB",
                        "label": "ROWB"
                    },
                    {
                        "value": "Kolkata",
                        "label": "Kolkata"
                    },
                    {
                        "value": "Pune",
                        "label": "Pune"
                    },
                    {
                        "value": "Nagpur",
                        "label": "Nagpur"
                    },
                    {
                        "value": "Ahmedabad",
                        "label": "Ahmedabad"
                    },
                    {
                        "value": "ROGJ",
                        "label": "ROGJ"
                    },
                    {
                        "value": "Rajkot",
                        "label": "Rajkot"
                    },
                    {
                        "value": "Surat",
                        "label": "Surat"
                    },
                    {
                        "value": "Baroda",
                        "label": "Baroda"
                    },
                    {
                        "value": "Mumbai",
                        "label": "Mumbai"
                    },
                    {
                        "value": "Indore",
                        "label": "Indore"
                    },
                    {
                        "value": "UP1",
                        "label": "UP1"
                    },
                    {
                        "value": "ROOD",
                        "label": "ROOD"
                    },
                    {
                        "value": "ROE",
                        "label": "ROE"
                    },
                    {
                        "value": "Andaman & Nicobar Islands",
                        "label": "Andaman & Nicobar Islands"
                    },
                    {
                        "value": "ROTN",
                        "label": "ROTN"
                    },
                    {
                        "value": "Cochin",
                        "label": "Cochin"
                    },
                    {
                        "value": "UP3",
                        "label": "UP3"
                    },
                    {
                        "value": "Himachal Pradesh",
                        "label": "Himachal Pradesh"
                    },
                    {
                        "value": "Jammu & Kashmir",
                        "label": "Jammu & Kashmir"
                    },
                    {
                        "value": "Uttarakhand",
                        "label": "Uttarakhand"
                    },
                    {
                        "value": "Haryana",
                        "label": "Haryana"
                    },
                    {
                        "value": "Goa",
                        "label": "Goa"
                    },
                    {
                        "value": "UP2",
                        "label": "UP2"
                    },
                    {
                        "value": "Delhi",
                        "label": "Delhi"
                    },
                    {
                        "value": "Hyderabad",
                        "label": "Hyderabad"
                    },
                    {
                        "value": "Andra Pradesh",
                        "label": "Andra Pradesh"
                    },
                    {
                        "value": "Daman & Diu",
                        "label": "Daman & Diu"
                    },
                    {
                        "value": "Chhattisgarh",
                        "label": "Chhattisgarh"
                    },
                    {
                        "value": "Chennai",
                        "label": "Chennai"
                    },
                    {
                        "value": "Pondicherry",
                        "label": "Pondicherry"
                    },
                    {
                        "value": "Vijaywada",
                        "label": "Vijaywada"
                    },
                    {
                        "value": "Vishakapatnam",
                        "label": "Vishakapatnam"
                    },
                    {
                        "value": "Telengana",
                        "label": "Telengana"
                    },
                    {
                        "value": "Kerala",
                        "label": "Kerala"
                    },
                    {
                        "value": "Jaipur",
                        "label": "Jaipur"
                    },
                    {
                        "value": "Bangalore",
                        "label": "Bangalore"
                    },
                    {
                        "value": "Coimbatore",
                        "label": "Coimbatore"
                    },
                    {
                        "value": "Bhubaneshwar",
                        "label": "Bhubaneshwar"
                    },
                    {
                        "value": "Jharkhand",
                        "label": "Jharkhand"
                    },
                    {
                        "value": "Chandigarh",
                        "label": "Chandigarh"
                    },
                    {
                        "value": "Bihar",
                        "label": "Bihar"
                    },
                    {
                        "value": "ROE",
                        "label": "ROE"
                    },
                    {
                        "value": "ROE",
                        "label": "ROE"
                    },
                    {
                        "value": "ROE",
                        "label": "ROE"
                    },
                    {
                        "value": "ROE",
                        "label": "ROE"
                    },
                    {
                        "value": "ROE",
                        "label": "ROE"
                    },
                    {
                        "value": "ROE",
                        "label": "ROE"
                    },
                    {
                        "value": "ROE",
                        "label": "ROE"
                    },
                    {
                        "value": "KA1",
                        "label": "KA1"
                    },
                    {
                        "value": "KA2",
                        "label": "KA2"
                    },
                    {
                        "value": "MP1",
                        "label": "MP1"
                    },
                    {
                        "value": "MP2",
                        "label": "MP2"
                    },
                    {
                        "value": "MP3",
                        "label": "MP3"
                    },
                    {
                        "value": "PB1",
                        "label": "PB1"
                    },
                    {
                        "value": "PB2",
                        "label": "PB2"
                    },
                    {
                        "value": "RJ1",
                        "label": "RJ1"
                    },
                    {
                        "value": "RJ2",
                        "label": "RJ2"
                    },
                    {
                        "value": "RJ3",
                        "label": "RJ3"
                    },
                    {
                        "value": "RJ4",
                        "label": "RJ4"
                    },
                    {
                        "value": "RJ5",
                        "label": "RJ5"
                    },
                    {
                        "value": "ROM1",
                        "label": "ROM1"
                    },
                    {
                        "value": "ROM2",
                        "label": "ROM2"
                    },
                    {
                        "value": "ROM3",
                        "label": "ROM3"
                    },
                    {
                        "value": "ROM4",
                        "label": "ROM4"
                    },
                    {
                        "value": "Dadra & Nagar Haveli",
                        "label": "Dadra & Nagar Haveli"
                    },
                    {
                        "value": "Sikkim",
                        "label": "Sikkim"
                    },
                    {
                        "value": "Arunachal Pradesh",
                        "label": "Arunachal Pradesh"
                    },
                    {
                        "value": "Assam",
                        "label": "Assam"
                    },
                    {
                        "value": "Manipur",
                        "label": "Manipur"
                    },
                    {
                        "value": "Meghalaya",
                        "label": "Meghalaya"
                    },
                    {
                        "value": "Mizoram",
                        "label": "Mizoram"
                    },
                    {
                        "value": "Nagaland",
                        "label": "Nagaland"
                    },
                    {
                        "value": "Tripura",
                        "label": "Tripura"
                    },
                    {
                        "value": "Punjab",
                        "label": "Punjab"
                    },
                    {
                        "value": "Rajasthan",
                        "label": "Rajasthan"
                    },
                    {
                        "value": "Uttar Pradesh",
                        "label": "Uttar Pradesh"
                    },
                    {
                        "value": "West Bengal",
                        "label": "West Bengal"
                    },
                    {
                        "value": "Orissa",
                        "label": "Orissa"
                    },
                    {
                        "value": "Madhya Pradesh",
                        "label": "Madhya Pradesh"
                    },
                    {
                        "value": "Gujrat",
                        "label": "Gujrat"
                    },
                    {
                        "value": "Maharashtra",
                        "label": "Maharashtra"
                    },
                    {
                        "value": "Karnataka",
                        "label": "Karnataka"
                    },
                    {
                        "value": "Tamil Nadu",
                        "label": "Tamil Nadu"
                    },
                    {
                        "value": "Daman And Diu",
                        "label": "Daman And Diu"
                    },
                    {
                        "value": "Rest All",
                        "label": "Rest All"
                    }
                ],
                "label": "RTO",
                "data": []
            },
            {
                "type": "autocomplete",
                "name": "withCPA",
                "options": [
                    {
                        "value": "all",
                        "label": "All"
                    },
                    {
                        "value": "Yes",
                        "label": "Yes"
                    },
                    {
                        "value": "No",
                        "label": "No"
                    }
                ],
                "label": "With CPA",
                "data": []
            },
            {
                "type": "autocomplete",
                "name": "ncb",
                "options": [
                    {
                        "value": "all",
                        "label": "All"
                    },
                    {
                        "value": "Yes",
                        "label": "Yes"
                    },
                    {
                        "value": "No",
                        "label": "No"
                    }
                ],
                "label": "NCB",
                "data": []
            },
            {
                "type": "autocomplete",
                "name": "vehicleAge",
                "options": [
                    {
                        "value": "all",
                        "label": "All"
                    },
                    {
                        "value": "<=3 Yrs",
                        "label": "<=3 Yrs"
                    },
                    {
                        "value": ">3 Yrs",
                        "label": ">3 Yrs"
                    }
                ],
                "label": "Vehicle Age",
                "data": []
            },
            {
                "type": "autocomplete",
                "name": "ensureGridApplicability",
                "options": [
                    {
                        "value": "Yes",
                        "label": "Yes"
                    },
                    {
                        "value": "No",
                        "label": "No"
                    }
                ],
                "label": "Ensure Grid Applicability",
                "data": []
            },
            {
                "type": "range",
                "data": [],
                "name": "Discount",
                "label": "Discount",
                "min": 0,
                "max": 100,
                "step": 1,
                "isInteger": true
            }
        ]
    }
}
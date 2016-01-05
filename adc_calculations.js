

                            /****************************************************************************************
                            *                       ADC FINANCIAL ELIGIBILITY CALCULATIONS                          *
                            *                           Pavan K. Narayanan, 2015                                    *
                            *****************************************************************************************/

/*
Input Variables: 
B.Income Information
Number in Family (1-30) also default and else -- id is familyheadcount
Income frequency 1 and 2: w b m and monthly income -- incFreq1, incFreq2, incAmt1, incAmt2
Source of Income 1 and 2: dropdown box selected -- source1, source2
monthly unearned income
Shelter type dropdown box selected - id is localDistrict, ShelterID
fuel type dropdown box selected -- fuelID

*/

function bNeedEnergySupp() {
    var headcount = document.getElementById("familyheadcount").value;
    switch (headcount) {
            case "1":
            document.getElementById("bneed").value = 112;
            document.getElementById("energy").value = 14.1;
            document.getElementById("suppenergy").value = 11;
            case "2":
            document.getElementById("bneed").value = 179;
            document.getElementById("energy").value = 22.5;
            document.getElementById("suppenergy").value = 17;
            case "3":
            document.getElementById("bneed").value = 238;
            document.getElementById("energy").value = 30;
            document.getElementById("suppenergy").value = 23;
            case "4":
            document.getElementById("bneed").value = 307;
            document.getElementById("energy").value = 38.7;
            document.getElementById("suppenergy").value = 30;
            case "5":
            document.getElementById("bneed").value = 379;
            document.getElementById("energy").value = 47.7;
            document.getElementById("suppenergy").value = 37;
            case "6":
            document.getElementById("bneed").value = 438;
            document.getElementById("energy").value = 55.2;
            document.getElementById("suppenergy").value = 42;
            case "7":
            document.getElementById("bneed").value = 498;
            document.getElementById("energy").value = 62.7;
            document.getElementById("suppenergy").value = 47;
            case "8":
            document.getElementById("bneed").value = 558;
            document.getElementById("energy").value = 70.2;
            document.getElementById("suppenergy").value = 52;
            case "9":
            document.getElementById("bneed").value = 618;
            document.getElementById("energy").value = 77.7;
            document.getElementById("suppenergy").value = 57;
            case "10":
            document.getElementById("bneed").value = 678;
            document.getElementById("energy").value = 85.2;
            document.getElementById("suppenergy").value = 62;
            case "11":
            document.getElementById("bneed").value = 738;
            document.getElementById("energy").value = 92.7;
            document.getElementById("suppenergy").value = 67;
            case "12":
            document.getElementById("bneed").value = 798;
            document.getElementById("energy").value = 100.2;
            document.getElementById("suppenergy").value = 72;
            case "13":
            document.getElementById("bneed").value = 858;
            document.getElementById("energy").value = 107.7;
            document.getElementById("suppenergy").value = 77;
            case "14":
            document.getElementById("bneed").value = 918;
            document.getElementById("energy").value = 115.2;
            document.getElementById("suppenergy").value = 82;
            case "15":
            document.getElementById("bneed").value = 978;
            document.getElementById("energy").value = 122.7;
            document.getElementById("suppenergy").value = 87;
            case "16":
            document.getElementById("bneed").value = 1038;
            document.getElementById("energy").value = 130.2;
            document.getElementById("suppenergy").value = 92;
            case "17":
            document.getElementById("bneed").value = 1098;
            document.getElementById("energy").value = 137.7;
            document.getElementById("suppenergy").value = 97;
            case "18":
            document.getElementById("bneed").value = 1158;
            document.getElementById("energy").value = 145.2;
            document.getElementById("suppenergy").value = 102;
            case "19":
            document.getElementById("bneed").value = 1218;
            document.getElementById("energy").value = 152.7;
            document.getElementById("suppenergy").value = 107;
            case "20":
            document.getElementById("bneed").value = 1278;
            document.getElementById("energy").value = 160.2;
            document.getElementById("suppenergy").value = 112;
            case "21":
            document.getElementById("bneed").value = 1338;
            document.getElementById("energy").value = 167.7;
            document.getElementById("suppenergy").value = 117;
            case "22":
            document.getElementById("bneed").value = 1398;
            document.getElementById("energy").value = 175.2;
            document.getElementById("suppenergy").value = 122;
            case "23":
            document.getElementById("bneed").value = 1458;
            document.getElementById("energy").value = 182.7;
            document.getElementById("suppenergy").value = 127;
            case "24":
            document.getElementById("bneed").value = 1518;
            document.getElementById("energy").value = 190.2;
            document.getElementById("suppenergy").value = 132;
            case "25":
            document.getElementById("bneed").value = 1578;
            document.getElementById("energy").value = 197.7;
            document.getElementById("suppenergy").value = 137;
            case "26":
            document.getElementById("bneed").value = 1638;
            document.getElementById("energy").value = 205.2;
            document.getElementById("suppenergy").value = 142;
            case "27":
            document.getElementById("bneed").value = 1698;
            document.getElementById("energy").value = 212.7;
            document.getElementById("suppenergy").value = 147;
            case "28":
            document.getElementById("bneed").value = 1758;
            document.getElementById("energy").value = 220.2;
            document.getElementById("suppenergy").value = 152;
            case "29":
            document.getElementById("bneed").value = 1818;
            document.getElementById("energy").value = 227.7;
            document.getElementById("suppenergy").value = 157;
            case "30":
            document.getElementById("bneed").value = 1878;
            document.getElementById("energy").value = 235.2;
            document.getElementById("suppenergy").value = 162;
            default: /* exception rule here */
            alert("Number of members in family cannot exceed 30");
            }
}

function shelterAllowance() {}



function fuel() {
    var fuel = document.getElementById("fuelID").value;
    var district = document.getElementById("localDistrict").value;
    var headcount = document.getElementById("familyheadcount").value;
    
    switch (fuel) {
            
        case "NoHeat":
            document.getElementById("fuelval").value = 0;
            
            
        case "1GasCoalWoodCityOther":
            switch (true) {
                case localDistrict == 'Nassau' || localDistrict == 'Suffolk' || localDistrict == 'Westchester' || localDistrict == 'New York City':
                    
                    if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "56";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "58";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "61";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "65";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "69";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "74";
                        
                    }
                    
                case localDistrict == 'Chautauqua' || localDistrict == 'Dutchess' || localDistrict == 'Orange' || localDistrict == 'Putnam' || localDistrict == 'Rockland' || localDistrict == 'Ulster':
                    
                    if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "55";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "57";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "60";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "64";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "68";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "73";
                        
                    }
                    
                    //statement
                case localDistrict == 'Columbia' || localDistrict == 'Erie' || localDistrict == 'Genesee' || localDistrict == 'Livingston' || localDistrict == 'Monroe' || localDistrict == 'Niagara' || localDistrict == 'Onondaga' || localDistrict == 'Ontario' || localDistrict == 'Orleans' || localDistrict == 'Oswego' || localDistrict == 'Wayne':
                    
                    if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "54";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "56";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "58";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "63";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "67";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "71";
                        
                    }
                    
                case localDistrict == 'Albany' || localDistrict == 'Cayuga' || localDistrict == 'Chemung' ||localDistrict == 'Greene' ||localDistrict == 'Schenectady' || localDistrict == 'Schuyler' ||localDistrict == 'Seneca' ||localDistrict == 'Tompkins' ||localDistrict == 'Yates':
                    
                    if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "58";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "60";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "63";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "68";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "72";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "77";
                        
                    }
                    
                    
                    
                    //statement
                case localDistrict == 'Allegany' || localDistrict == 'Broome' || localDistrict == 'Cattaraugus' || localDistrict == 'Chenango' || localDistrict == 'Delaware' || localDistrict == 'Fulton' || localDistrict == 'Jefferson' || localDistrict == 'Madison' || localDistrict == 'Montgomery' || localDistrict == 'Otsego' || localDistrict == 'Rensselaer' || localDistrict == 'Saratoga' || localDistrict == 'Schoharie' || localDistrict == 'Steuben' || localDistrict == 'Sullivan' || localDistrict == 'Tioga' || localDistrict == 'Warren' || localDistrict == 'Washington' || localDistrict == 'Wyoming':
                    
                    
                    if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "58";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "60";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "63";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "67";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "72";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "77";
                        
                    }
                    
                    
                    
                case localDistrict == 'Clinton' || localDistrict == 'Lewis' || localDistrict == 'Oneida' || localDistrict == 'St. Lawrence':
                    
                     if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "55";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "57";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "60";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "64";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "69";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "73";
                        
                    }
                    
                case localDistrict == 'Essex' || localDistrict == 'Franklin' || localDistrict == 'Hamilton' || localDistrict == 'Herkimer':
                    
                     if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "66";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "68";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "71";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "77";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "82";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "87";
                        
                    }
                    
                    
            }
    
        case "2OilKerosenePropane":
            
            switch (true) {
                case localDistrict == 'Nassau' || localDistrict == 'Suffolk' || localDistrict == 'Westchester' || localDistrict == 'New York City':
                    
                    if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "70";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "73";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "77";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "82";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "88";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "93";
                        
                    }
                    
                case localDistrict == 'Chautauqua' || localDistrict == 'Dutchess' || localDistrict == 'Orange' || localDistrict == 'Putnam' || localDistrict == 'Rockland' || localDistrict == 'Ulster':
                    
                    if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "68";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "71";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "74";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "80";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "85";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "91";
                        
                    }
                    
                    //statement
                case localDistrict == 'Columbia' || localDistrict == 'Erie' || localDistrict == 'Genesee' || localDistrict == 'Livingston' || localDistrict == 'Monroe' || localDistrict == 'Niagara' || localDistrict == 'Onondaga' || localDistrict == 'Ontario' || localDistrict == 'Orleans' || localDistrict == 'Oswego' || localDistrict == 'Wayne':
                    
                    if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "69";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "72";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "75";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "81";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "87";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "92";
                        
                    }
                    
                case localDistrict == 'Albany' || localDistrict == 'Cayuga' || localDistrict == 'Chemung' ||localDistrict == 'Greene' ||localDistrict == 'Schenectady' || localDistrict == 'Schuyler' ||localDistrict == 'Seneca' ||localDistrict == 'Tompkins' ||localDistrict == 'Yates':
                    
                    if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "69";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "72";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "75";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "81";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "87";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "92";
                        
                    }
                    
                    
                    //statement
                case localDistrict == 'Allegany' || localDistrict == 'Broome' || localDistrict == 'Cattaraugus' || localDistrict == 'Chenango' || localDistrict == 'Delaware' || localDistrict == 'Fulton' || localDistrict == 'Jefferson' || localDistrict == 'Madison' || localDistrict == 'Montgomery' || localDistrict == 'Otsego' || localDistrict == 'Rensselaer' || localDistrict == 'Saratoga' || localDistrict == 'Schoharie' || localDistrict == 'Steuben' || localDistrict == 'Sullivan' || localDistrict == 'Tioga' || localDistrict == 'Warren' || localDistrict == 'Washington' || localDistrict == 'Wyoming':
                    
                    
                    if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "72";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "75";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "78";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "84";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "90";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "96";
                        
                    }
                    
                    
                    
                case localDistrict == 'Clinton' || localDistrict == 'Lewis' || localDistrict == 'Oneida' || localDistrict == 'St. Lawrence':
                    
                     if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "71";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "74";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "78";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "83";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "89";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "95";
                        
                    }
                    
                case localDistrict == 'Essex' || localDistrict == 'Franklin' || localDistrict == 'Hamilton' || localDistrict == 'Herkimer':
                    
                     if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "77";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "80";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "84";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "90";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "96";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "102";
                        
                    }
                    
                    
            }
            
            
        case "3PSC":
            
            switch (true) {
                case localDistrict == 'Nassau' || localDistrict == 'Suffolk' || localDistrict == 'Westchester' || localDistrict == 'New York City':
                    
                    if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "90";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "94";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "99";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "106";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "113";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "120";
                        
                    }
                    
                case localDistrict == 'Chautauqua' || localDistrict == 'Dutchess' || localDistrict == 'Orange' || localDistrict == 'Putnam' || localDistrict == 'Rockland' || localDistrict == 'Ulster':
                    
                    if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "105";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "109";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "114";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "123";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "131";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "139";
                        
                    }
                    
                    //statement
                case localDistrict == 'Columbia' || localDistrict == 'Erie' || localDistrict == 'Genesee' || localDistrict == 'Livingston' || localDistrict == 'Monroe' || localDistrict == 'Niagara' || localDistrict == 'Onondaga' || localDistrict == 'Ontario' || localDistrict == 'Orleans' || localDistrict == 'Oswego' || localDistrict == 'Wayne':
                    
                    if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "107";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "111";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "117";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "125";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "134";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "142";
                        
                    }
                    
                case localDistrict == 'Albany' || localDistrict == 'Cayuga' || localDistrict == 'Chemung' ||localDistrict == 'Greene' ||localDistrict == 'Schenectady' || localDistrict == 'Schuyler' ||localDistrict == 'Seneca' ||localDistrict == 'Tompkins' ||localDistrict == 'Yates':
                    
                    if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "120";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "125";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "131";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "140";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "150";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "160";
                        
                    }
                    
                    
                    //statement
                case localDistrict == 'Allegany' || localDistrict == 'Broome' || localDistrict == 'Cattaraugus' || localDistrict == 'Chenango' || localDistrict == 'Delaware' || localDistrict == 'Fulton' || localDistrict == 'Jefferson' || localDistrict == 'Madison' || localDistrict == 'Montgomery' || localDistrict == 'Otsego' || localDistrict == 'Rensselaer' || localDistrict == 'Saratoga' || localDistrict == 'Schoharie' || localDistrict == 'Steuben' || localDistrict == 'Sullivan' || localDistrict == 'Tioga' || localDistrict == 'Warren' || localDistrict == 'Washington' || localDistrict == 'Wyoming':
                    
                    
                    if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "122";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "127";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "133";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "142";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "152";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "162";
                        
                    }
                    
                    
                    
                case localDistrict == 'Clinton' || localDistrict == 'Lewis' || localDistrict == 'Oneida' || localDistrict == 'St. Lawrence':
                    
                     if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "122";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "127";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "133";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "143";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "153";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "163";
                        
                    }
                    
                case localDistrict == 'Essex' || localDistrict == 'Franklin' || localDistrict == 'Hamilton' || localDistrict == 'Herkimer':
                    
                     if (headcount=='1' || headcount=='2' || headcount=='3'){
                        
                        document.getElementById("fuelval").value = "140";
                        
                    } else if (headcount=='4') {
                        
                        document.getElementById("fuelval").value = "146";
                        
                    }
                    
                    else if (headcount=='5') {
                        
                        document.getElementById("fuelval").value = "153";
                        
                    }
                    
                    else if (headcount=='6') {
                        
                        document.getElementById("fuelval").value = "164";
                        
                    }
                    
                    else if (headcount=='7') {
                        
                        document.getElementById("fuelval").value = "175";
                        
                    }
                    
                    else if (headcount>7) {
                        
                        document.getElementById("fuelval").value = "186";
                        
                    }
                    
                    
            }
            
    
    }

}


function grossIncome1() {
    
    var freq1 = document.getElementById("incFreq1").value;
    var amt1 = document.getElementById("incAmt1").value;
    
    if (freq1="w") {
        document.getElementById("ginc1") = amt1*1;
    } else if (freq1="b") {
        document.getElementById("ginc1") = amt1*2.16;
        
    } else if (freq1="m") {
        document.getElementById("ginc1") = amt1*4.33;
    }

}
function grossIncome2() {
    
    var freq2 = document.getElementById("incFreq2").value;
    var amt2 = document.getElementById("incAmt2").value;
    
    if (freq2="w") {
        document.getElementById("ginc2") = amt1*1;
    } else if (freq2="b") {
        document.getElementById("ginc2") = amt1*2.16;
        
    } else if (freq2="m") {
        document.getElementById("ginc2") = amt1*4.33;
    }

    
}


function grossEarnedIncome() {
    
    document.getElementById("gtotinc").value = document.getElementById("ginc1").value + document.getElementById("ginc1").value;

}

function workExp1() {

}



function workExp2() {

}

















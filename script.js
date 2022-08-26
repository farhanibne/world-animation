var info = {'AFGHANISTAN':'AF','ÅLAND ISLANDS':'AX','ALBANIA':'AL','ALGERIA':'DZ','AMERICAN SAMOA':'AS','ANDORRA':'AD','ANGOLA':'AO','ANGUILLA':'AI','ANTARCTICA':'AQ','ANTIGUA AND BARBUDA':'AG','ARGENTINA':'AR','ARMENIA':'AM','ARUBA':'AW','AUSTRALIA':'AU','AUSTRIA':'AT','AZERBAIJAN':'AZ','BAHAMAS':'BS','BAHRAIN':'BH','BANGLADESH':'BD','BARBADOS':'BB','BELARUS':'BY','BELGIUM':'BE','BELIZE':'BZ','BENIN':'BJ','BERMUDA':'BM','BHUTAN':'BT','BOLIVIA':'BO','BONAIRE: SINT EUSTATIUS AND SABA':'BQ','BOSNIA':'BA','BOTSWANA':'BW','BOUVET ISLAND':'BV','BRAZIL':'BR','BRITISH INDIAN OCEAN TERRITORY':'IO','BRUNEI DARUSSALAM':'BN','BULGARIA':'BG','BURKINA':'BF','BURUNDI':'BI','CAMBODIA':'KH','CAMEROON':'CM','CANADA':'CA','CAPE VERDE':'CV','CAYMAN ISLANDS':'KY','CENTRAFRIQUE':'CF','CHAD':'TD','CHILE':'CL','CHINA':'CN','CHRISTMAS ISLAND':'CX','COCOS (KEELING) ISLANDS':'CC','COLOMBIA':'CO','COMOROS':'KM','DRC':'CG','CONGO':'CD','COOK ISLANDS':'CK','COSTA RICA':'CR','IVOIRE':'CI','CROATIA':'HR','CUBA':'CU','CURAÇAO':'CW','CYPRUS':'CY','CZECH':'CZ','DENMARK':'DK','DJIBOUTI':'DJ','DOMINICA':'DM','DOMINCAN REPUBLIC':'DO','ECUADOR':'EC','EGYPT':'EG','EL SALVADOR':'SV','EQUATORIAL GUINEA':'GQ','ERITREA':'ER','ESTONIA':'EE','ETHIOPIA':'ET','FALKLAND ISLANDS (MALVINAS)':'FK','FAROE ISLANDS':'FO','FIJI':'FJ','FINLAND':'FI','FRANCE':'FR','FRENCH GUIANA':'GF','FRENCH POLYNESIA':'PF','FRENCH SOUTHERN TERRITORIES':'TF','GABON':'GA','GAMBIA':'GM','GEORGIA':'GE','GERMANY':'DE','GHANA':'GH','GIBRALTAR':'GI','GREECE':'GR','GREENLAND':'GL','GRENADA':'GD','GUADELOUPE':'GP','GUAM':'GU','GUATEMALA':'GT','GUERNSEY':'GG','GUINEE':'GN','BISSAU':'GW','GUYANA':'GY','HAITI':'HT','HEARD ISLAND AND MCDONALD ISLANDS':'HM','VATICAN CITY ':'VA','HONDURAS':'HN','HONG KONG':'HK','HUNGARY':'HU','ICELAND':'IS','INDIA':'IN','INDONESIA':'ID','IRAN':'IR','IRAQ':'IQ','IRELAND':'IE','ISLE OF MAN':'IM','ISRAEL':'IL','ITALY':'IT','JAMAICA':'JM','JAPAN':'JP','JERSEY':'JE','JORDAN':'JO','KAZAKHSTAN':'KZ','KENYA':'KE','KIRIBATI':'KI','KOREA':'KR','KUWAIT':'KW','KYRGYZSTAN':'KG','LAOS':'LA','LATVIA':'LV','LEBANON':'LB','LESOTHO':'LS','LIBERIA':'LR','LIBYA':'LY','LIECHTENSTEIN':'LI','LITHUANIA':'LT','LUXEMBOURG':'LU','MACAO':'MO','MADAGASCAR':'MG','MALAWI':'MW','MALAYSIA':'MY','MALDIVES':'MV','MALI':'ML','MALTA':'MT','MARSHALL ISLANDS':'MH','MARTINIQUE':'MQ','MAURETANIA':'MR','MAURITIUS':'MU','MAYOTTE':'YT','MEXICO':'MX','MICRONESIA: FEDERATED STATES OF':'FM','MOLDOVA':'MD','MONACO':'MC','MONGOLIA':'MN','MONTENEGRO':'ME','MONTSERRAT':'MS','MOROCCO':'MA','MOZAMBIQUE':'MZ','MYANMAR':'MM','NAMIBIA':'NA','NAURU':'NR','NEPAL':'NP','NETHERLANDS':'NL','NEW CALEDONIA':'NC','NEW ZEALAND SOUTH ISLAND':'NZ','NEW ZEALAND NORTH ISLAND':'NZ','NICARAGUA':'NI','NIGER':'NE','NIGERIA':'NG','NIUE':'NU','NORFOLK ISLAND':'NF','NORTHERN MARIANA ISLANDS':'MP','NORWAY':'NO','OMAN':'OM','PAKISTAN':'PK','PALAU':'PW','PALESTINE: STATE OF':'PS','PANAMA':'PA','PAPUA NEW GUINEA':'PG','PARAGUAY':'PY','PERU':'PE','PHILIPPINES':'PH','PITCAIRN':'PN','POLAND':'PL','PORTUGAL':'PT','PUERTO RICO':'PR','QATAR':'QA','RÉUNION':'RE','ROMANIA':'RO','RUSSIA':'RU','RWANDA':'RW','SAINT BARTHÉLEMY':'BL','SAINT HELENA: ASCENSION AND TRISTAN DA CUNHA':'SH','SAINT KITTS AND NEVIS':'KN','SAINT LUCIA':'LC','SAINT MARTIN (FRENCH PART)':'MF','SAINT PIERRE AND MIQUELON':'PM','SAINT VINCENT AND THE GRENADINES':'VC','SAMOA':'WS','SAN MARINO':'SM','SAO TOME AND PRINCIPE':'ST','SAUDI':'SA','SENEGAL':'SN','SERBIA AND MONTENEGRO':'RS','SEYCHELLES':'SC','SIERRA LEONE':'SL','SINGAPORE':'SG','SINT MAARTEN (DUTCH PART)':'SX','SLOVAKIA':'SK','SLOVENIA':'SI','SOLOMON ISLANDS':'SB','SOMALIA':'SO','SOUTH AFRICA':'ZA','SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS':'GS','SOUTH SUDAN':'SS','SPAIN':'ES','SRI LANKA':'LK','SUDAN':'SD','SURINAME':'SR','SVALBARD AND JAN MAYEN':'SJ','SWAZILAND':'SZ','SWEDEN':'SE','SWITZERLAND':'CH','SYRIA':'SY','TAIWAN: PROVINCE OF CHINA':'TW','TAJIKISTAN':'TJ','TANZANIA':'TZ','THAILAND':'TH','TIMOR-LESTE':'TL','TOGO':'TG','TOKELAU':'TK','TONGA':'TO','TRINIDAD AND TOBAGO':'TT','TUNISIA':'TN','TURKEY':'TR','TURKMENISTAN':'TM','TURKS AND CAICOS ISLANDS':'TC','TUVALU':'TV','UGANDA':'UG','UKRAINE':'UA','EMIRATES':'AE','BRITAIN':'GB','USA':'US','UNITED STATES MINOR OUTLYING ISLANDS':'UM','URUGUAY':'UY','UZBEKISTAN':'UZ','VANUATU':'VU','VENEZUELA: BOLIVARIAN REPUBLIC OF':'VE','VIETNAM':'VN','VIRGIN ISLANDS: BRITISH':'VG','VIRGIN ISLANDS: U.S.':'VI','WALLIS AND FUTUNA':'WF','WESTERN SAHARA':'EH','YEMEN':'YE','ZAMBIA':'ZM','ZIMBABWE':'ZW','VENEZUELA':'VE','KIRGIZSTAN':'KG','SUMATRA':'ID','BURMA':'MM','HONSHU':'JP','EAST ANTARCTICA':'AQ'}

function numberFormat(nr){
	//remove the existing ,
	var regex = /,/g;
	nr = nr.replace(regex,'');
	//force it to be a string
	nr += '';
	//split it into 2 parts  (for numbers with decimals, ex: 125.05125)
	var x = nr.split('.');
	var p1 = x[0];
	var p2 = x.length > 1 ? '.' + x[1] : '';
	//match groups of 3 numbers (0-9) and add , between them
	regex = /(\d+)(\d{3})/;
	while (regex.test(p1)) {
		p1 = p1.replace(regex, '$1' + ',' + '$2');
	}
	//join the 2 parts and return the formatted number
	return p1 + p2;
}  

function update(json){
  country = json['geonames'][0];
  
  if(country === undefined){
    $('.indicator').html('Information could not be found').css('width','300px');
    
  }else{
    
    $('.indicator').html('').append('<h2 class="name">'+country.countryName+'</h2>');
    $('.indicator').append('<img src="http://www.geonames.org/flags/m/'+country.countryCode.toLowerCase()+'.png" alt="" class="flag" />');
     
    $('.indicator').append('<div class="clear capital">Capital City : '+country.capital+'</div>');
    
    $('.indicator').append('<div class="population">Population : '+numberFormat(country.population)+'</div>');
    
    if(country.countryName== 'Lebanon')country.areaInSqKm = '10452';
    
    $('.indicator').append('<div class="area">Area in km&sup2; : '+ numberFormat(country.areaInSqKm)+ '</div>');
  
  }
}
 

$('path').hover(function(e){
  
  $('.indicator').html('');
  var id = $(this).attr('id').toUpperCase();
  
  $('.change').remove();
  
  var script = document.createElement('script');  
   script.classList.add('change');
   script.src = 'http://api.geonames.org/countryInfoJSON?country='+info[id]+'&username=pixeltest&style=full&callback=update';
  document.body.appendChild(script); 
  
  $(this).css('fill','#65a9d8');
  //$('path').not(this).css('fill','rgba(0,0,0,0.5)');
  $('.indicator').css({'top':e.pageY,'left':e.pageX+30}).show();      
       
  
  
},function(){
  $('.indicator').html('');
  $('.indicator').hide();
  //$('path').css('fill','black');
});
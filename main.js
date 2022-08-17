$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    
    setProgressBar(current);
    
    $(".next").click(function(){
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    next_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(++current);
    });
    
    $(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();
    
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(--current);
    });
    
    function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
    }
    
    $(".submit").click(function(){
    return false;
    })
    $("#shareholderse").on("click", function(){
    check = $("#shareholderse").prop("checked");
    if($('input[name="isshareholder"]:checked'))
    {
     $('#sharecount').removeClass('none');
    }else{
      // unchecked
      console.log('hi')
      $('#sharecount').addClass('none');
    }
});
    $(':radio[id=qurantee]').change(function() {
        $("#clause").removeClass("none");
     console.log('hi')
     $("#shareholder strong").text("Subscriber");
     $('#shareholdertitle').text('Subscriber')
     $('#sharenumber').hide();
     $('#sharenumber1').hide();
     });
     $(':radio[id=share]').change(function() {
        $("#clause").addClass("none");
        console.log('hi')
        $("#shareholder strong").text("Shareholder");
        $('#shareholdertitle').text('Shareholder')
        $('#sharenumber').show();
        $('#sharenumber1').show();
     });
     $(document).ready(function() {
        $('.js-example-basic-multiple-limit').select2({
            maximumSelectionLength: 4
        });
    });
    getAddress.find(
        'postcode_lookup',
        'eDg36Y1xhkW72E4Sc756lw36178',
       { output_fields:{
    formatted_address_0:'companyaddress1',  /* The id of the element bound to 'formatted_address[0]' */
    formatted_address_1:'companyaddress2',  /* The id of the element bound to 'formatted_address[1]' */
    town_or_city:'companycity',  /* The id of the element bound to 'town_or_city' */
    postcode:'companypostal',  /* The id of the element bound to 'postcode' */
    },
    input:{
        id:'getaddress_input',  /* The id of the textbox' */
        name:'getaddress_input',  /* The name of the textbox' */
        class:'form-control',  /* The class of the textbox' */
        label:'Enter your Postcode'  /* The label of the textbox' */
    },
    button:{
        id:'getaddress_button',  /* The id of the botton' */
        class:'form-control',  /* The class of the botton' */
        label:'Search',  /* The label of the botton' */
    },
    dropdown:{
        id:'getaddress_dropdown',  /* The id of the dropdown' */
        class:'form-select',  /* The class of the dropdown' */
        select_message:'Select your Address',  /* The select message of the dropdown' */
        template:''  /* The suggestion template of the dropdown' (see Autocomplete API)*/
    },}
    );
    getAddress.find(
        'postcode_lookupdir',
        'eDg36Y1xhkW72E4Sc756lw36178',
       { output_fields:{
    formatted_address_0:'directoraddress',  /* The id of the element bound to 'formatted_address[0]' */
    formatted_address_1:'directoraddress2',  /* The id of the element bound to 'formatted_address[1]' */
    town_or_city:'directorcity',  /* The id of the element bound to 'town_or_city' */
    postcode:'directorzip',  /* The id of the element bound to 'postcode' */
    },
    input:{
        id:'getaddress_input',  /* The id of the textbox' */
        name:'getaddress_input',  /* The name of the textbox' */
        class:'form-control',  /* The class of the textbox' */
        label:'Enter your Postcode'  /* The label of the textbox' */
    },
    button:{
        id:'getaddress_button',  /* The id of the botton' */
        class:'form-control',  /* The class of the botton' */
        label:'Search',  /* The label of the botton' */
    },
    dropdown:{
        id:'getaddress_dropdown',  /* The id of the dropdown' */
        class:'form-select',  /* The class of the dropdown' */
        select_message:'Select your Address',  /* The select message of the dropdown' */
        template:''  /* The suggestion template of the dropdown' (see Autocomplete API)*/
    }}
    );
    getAddress.find(
        'postcode_lookupshare',
        'eDg36Y1xhkW72E4Sc756lw36178',
       { output_fields:{
    formatted_address_0:'shareholderaddress',  /* The id of the element bound to 'formatted_address[0]' */
    formatted_address_1:'shareholderaddress2',  /* The id of the element bound to 'formatted_address[1]' */
    town_or_city:'shareholdercity',  /* The id of the element bound to 'town_or_city' */
    postcode:'shareholderzip',  /* The id of the element bound to 'postcode' */
    },
    input:{
        id:'getaddress_input',  /* The id of the textbox' */
        name:'getaddress_input',  /* The name of the textbox' */
        class:'form-control',  /* The class of the textbox' */
        label:'Enter your Postcode'  /* The label of the textbox' */
    },
    button:{
        id:'getaddress_button',  /* The id of the botton' */
        class:'form-control',  /* The class of the botton' */
        label:'Search',  /* The label of the botton' */
    },
    dropdown:{
        id:'getaddress_dropdown',  /* The id of the dropdown' */
        class:'form-select',  /* The class of the dropdown' */
        select_message:'Select your Address',  /* The select message of the dropdown' */
        template:''  /* The suggestion template of the dropdown' (see Autocomplete API)*/
    }}
    );

    //dynamic field
    $("#addshareholder").click(function(){
        console.log('hi')
        var html;
        html = `    <div class="row mt-4" id="shareholder">
                <div class="card">
                    <div class="card-header">
                        Add Shareholder
                        <button type="button" class="btn btn-danger" id="deleteshareholder">Delete Shareholder</button>
                      </div>
                      <div class="card-body">
                            <div class="row">
                                <div class="col-sm-4">
                                    <label  class="form-label"> First Name</label>
                                    <input type="text" class="form-control" placeholder="First Name"  name="shareholderfirstname[]">
                                </div>
                                <div class="col-sm-4">
                                    <label  class="form-label"> Middle Name</label>
                                  <input type="text" class="form-control" placeholder="Middle Name" name="shareholdermiddlename[]">
                                </div>
                                <div class="col-sm-4">
                                    <label  class="form-label"> Last Name</label>
                                  <input type="text" class="form-control" placeholder="Last Name" name="shareholderlastname[]">
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-sm-4">
                                    <label  class="form-label"> Date of Birth</label>
                                    <input type="text" class="form-control" placeholder="Date of Birth" name="shareholderdob[]">
                                </div>
                                <div class="col-sm-4">
                                    <label  class="form-label">Shareholder NIC</label>
                                    <input type="text" class="form-control" placeholder="NIC" name="shareholdernic[]">
                                </div>
                                <div class="col-sm-4">
                                    <label  class="form-label"> Nationality</label>
                                    <select class="form-select" aria-label="Default select example" name="shareholdernationality[]">
                                        <option value="">-- select one --</option>
                                        <option value="afghan">Afghan</option>
                                        <option value="albanian">Albanian</option>
                                        <option value="algerian">Algerian</option>
                                        <option value="american">American</option>
                                        <option value="andorran">Andorran</option>
                                        <option value="angolan">Angolan</option>
                                        <option value="antiguans">Antiguans</option>
                                        <option value="argentinean">Argentinean</option>
                                        <option value="armenian">Armenian</option>
                                        <option value="australian">Australian</option>
                                        <option value="austrian">Austrian</option>
                                        <option value="azerbaijani">Azerbaijani</option>
                                        <option value="bahamian">Bahamian</option>
                                        <option value="bahraini">Bahraini</option>
                                        <option value="bangladeshi">Bangladeshi</option>
                                        <option value="barbadian">Barbadian</option>
                                        <option value="barbudans">Barbudans</option>
                                        <option value="batswana">Batswana</option>
                                        <option value="belarusian">Belarusian</option>
                                        <option value="belgian">Belgian</option>
                                        <option value="belizean">Belizean</option>
                                        <option value="beninese">Beninese</option>
                                        <option value="bhutanese">Bhutanese</option>
                                        <option value="bolivian">Bolivian</option>
                                        <option value="bosnian">Bosnian</option>
                                        <option value="brazilian">Brazilian</option>
                                        <option value="british">British</option>
                                        <option value="bruneian">Bruneian</option>
                                        <option value="bulgarian">Bulgarian</option>
                                        <option value="burkinabe">Burkinabe</option>
                                        <option value="burmese">Burmese</option>
                                        <option value="burundian">Burundian</option>
                                        <option value="cambodian">Cambodian</option>
                                        <option value="cameroonian">Cameroonian</option>
                                        <option value="canadian">Canadian</option>
                                        <option value="cape verdean">Cape Verdean</option>
                                        <option value="central african">Central African</option>
                                        <option value="chadian">Chadian</option>
                                        <option value="chilean">Chilean</option>
                                        <option value="chinese">Chinese</option>
                                        <option value="colombian">Colombian</option>
                                        <option value="comoran">Comoran</option>
                                        <option value="congolese">Congolese</option>
                                        <option value="costa rican">Costa Rican</option>
                                        <option value="croatian">Croatian</option>
                                        <option value="cuban">Cuban</option>
                                        <option value="cypriot">Cypriot</option>
                                        <option value="czech">Czech</option>
                                        <option value="danish">Danish</option>
                                        <option value="djibouti">Djibouti</option>
                                        <option value="dominican">Dominican</option>
                                        <option value="dutch">Dutch</option>
                                        <option value="east timorese">East Timorese</option>
                                        <option value="ecuadorean">Ecuadorean</option>
                                        <option value="egyptian">Egyptian</option>
                                        <option value="emirian">Emirian</option>
                                        <option value="equatorial guinean">Equatorial Guinean</option>
                                        <option value="eritrean">Eritrean</option>
                                        <option value="estonian">Estonian</option>
                                        <option value="ethiopian">Ethiopian</option>
                                        <option value="fijian">Fijian</option>
                                        <option value="filipino">Filipino</option>
                                        <option value="finnish">Finnish</option>
                                        <option value="french">French</option>
                                        <option value="gabonese">Gabonese</option>
                                        <option value="gambian">Gambian</option>
                                        <option value="georgian">Georgian</option>
                                        <option value="german">German</option>
                                        <option value="ghanaian">Ghanaian</option>
                                        <option value="greek">Greek</option>
                                        <option value="grenadian">Grenadian</option>
                                        <option value="guatemalan">Guatemalan</option>
                                        <option value="guinea-bissauan">Guinea-Bissauan</option>
                                        <option value="guinean">Guinean</option>
                                        <option value="guyanese">Guyanese</option>
                                        <option value="haitian">Haitian</option>
                                        <option value="herzegovinian">Herzegovinian</option>
                                        <option value="honduran">Honduran</option>
                                        <option value="hungarian">Hungarian</option>
                                        <option value="icelander">Icelander</option>
                                        <option value="indian">Indian</option>
                                        <option value="indonesian">Indonesian</option>
                                        <option value="iranian">Iranian</option>
                                        <option value="iraqi">Iraqi</option>
                                        <option value="irish">Irish</option>
                                        <option value="israeli">Israeli</option>
                                        <option value="italian">Italian</option>
                                        <option value="ivorian">Ivorian</option>
                                        <option value="jamaican">Jamaican</option>
                                        <option value="japanese">Japanese</option>
                                        <option value="jordanian">Jordanian</option>
                                        <option value="kazakhstani">Kazakhstani</option>
                                        <option value="kenyan">Kenyan</option>
                                        <option value="kittian and nevisian">Kittian and Nevisian</option>
                                        <option value="kuwaiti">Kuwaiti</option>
                                        <option value="kyrgyz">Kyrgyz</option>
                                        <option value="laotian">Laotian</option>
                                        <option value="latvian">Latvian</option>
                                        <option value="lebanese">Lebanese</option>
                                        <option value="liberian">Liberian</option>
                                        <option value="libyan">Libyan</option>
                                        <option value="liechtensteiner">Liechtensteiner</option>
                                        <option value="lithuanian">Lithuanian</option>
                                        <option value="luxembourger">Luxembourger</option>
                                        <option value="macedonian">Macedonian</option>
                                        <option value="malagasy">Malagasy</option>
                                        <option value="malawian">Malawian</option>
                                        <option value="malaysian">Malaysian</option>
                                        <option value="maldivan">Maldivan</option>
                                        <option value="malian">Malian</option>
                                        <option value="maltese">Maltese</option>
                                        <option value="marshallese">Marshallese</option>
                                        <option value="mauritanian">Mauritanian</option>
                                        <option value="mauritian">Mauritian</option>
                                        <option value="mexican">Mexican</option>
                                        <option value="micronesian">Micronesian</option>
                                        <option value="moldovan">Moldovan</option>
                                        <option value="monacan">Monacan</option>
                                        <option value="mongolian">Mongolian</option>
                                        <option value="moroccan">Moroccan</option>
                                        <option value="mosotho">Mosotho</option>
                                        <option value="motswana">Motswana</option>
                                        <option value="mozambican">Mozambican</option>
                                        <option value="namibian">Namibian</option>
                                        <option value="nauruan">Nauruan</option>
                                        <option value="nepalese">Nepalese</option>
                                        <option value="new zealander">New Zealander</option>
                                        <option value="ni-vanuatu">Ni-Vanuatu</option>
                                        <option value="nicaraguan">Nicaraguan</option>
                                        <option value="nigerien">Nigerien</option>
                                        <option value="north korean">North Korean</option>
                                        <option value="northern irish">Northern Irish</option>
                                        <option value="norwegian">Norwegian</option>
                                        <option value="omani">Omani</option>
                                        <option value="pakistani">Pakistani</option>
                                        <option value="palauan">Palauan</option>
                                        <option value="panamanian">Panamanian</option>
                                        <option value="papua new guinean">Papua New Guinean</option>
                                        <option value="paraguayan">Paraguayan</option>
                                        <option value="peruvian">Peruvian</option>
                                        <option value="polish">Polish</option>
                                        <option value="portuguese">Portuguese</option>
                                        <option value="qatari">Qatari</option>
                                        <option value="romanian">Romanian</option>
                                        <option value="russian">Russian</option>
                                        <option value="rwandan">Rwandan</option>
                                        <option value="saint lucian">Saint Lucian</option>
                                        <option value="salvadoran">Salvadoran</option>
                                        <option value="samoan">Samoan</option>
                                        <option value="san marinese">San Marinese</option>
                                        <option value="sao tomean">Sao Tomean</option>
                                        <option value="saudi">Saudi</option>
                                        <option value="scottish">Scottish</option>
                                        <option value="senegalese">Senegalese</option>
                                        <option value="serbian">Serbian</option>
                                        <option value="seychellois">Seychellois</option>
                                        <option value="sierra leonean">Sierra Leonean</option>
                                        <option value="singaporean">Singaporean</option>
                                        <option value="slovakian">Slovakian</option>
                                        <option value="slovenian">Slovenian</option>
                                        <option value="solomon islander">Solomon Islander</option>
                                        <option value="somali">Somali</option>
                                        <option value="south african">South African</option>
                                        <option value="south korean">South Korean</option>
                                        <option value="spanish">Spanish</option>
                                        <option value="sri lankan">Sri Lankan</option>
                                        <option value="sudanese">Sudanese</option>
                                        <option value="surinamer">Surinamer</option>
                                        <option value="swazi">Swazi</option>
                                        <option value="swedish">Swedish</option>
                                        <option value="swiss">Swiss</option>
                                        <option value="syrian">Syrian</option>
                                        <option value="taiwanese">Taiwanese</option>
                                        <option value="tajik">Tajik</option>
                                        <option value="tanzanian">Tanzanian</option>
                                        <option value="thai">Thai</option>
                                        <option value="togolese">Togolese</option>
                                        <option value="tongan">Tongan</option>
                                        <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                        <option value="tunisian">Tunisian</option>
                                        <option value="turkish">Turkish</option>
                                        <option value="tuvaluan">Tuvaluan</option>
                                        <option value="ugandan">Ugandan</option>
                                        <option value="ukrainian">Ukrainian</option>
                                        <option value="uruguayan">Uruguayan</option>
                                        <option value="uzbekistani">Uzbekistani</option>
                                        <option value="venezuelan">Venezuelan</option>
                                        <option value="vietnamese">Vietnamese</option>
                                        <option value="welsh">Welsh</option>
                                        <option value="yemenite">Yemenite</option>
                                        <option value="zambian">Zambian</option>
                                        <option value="zimbabwean">Zimbabwean</option>
                                      </select>
                                      
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-sm-4">
                                    <label  class="form-label"> Place of Birth</label>
                                    <input  data-toggle="datepicker" class="form-control" placeholder="Place of Birth" name="shareholderplaceofbirth[]">
                                </div>
                                <div class="col-sm-4">
                                    <label  class="form-label"> Passport Number</label>
                                    <input  data-toggle="datepicker" class="form-control" placeholder="Passport Number" name="shareholderpassno[]">
                                </div>
                                <div class="col-sm-4">
                                    <label  class="form-label"> Mobile Number</label>
                                    <input  data-toggle="datepicker" class="form-control" placeholder="Mobile Number" name="shareholdermobno[]">
                                </div>
                            </div>
                            
                           <div class="row mt-4">
                           <div class="col-sm-4">
                           <label  class="form-label">Enter your postcode</label>

                           <div id="postcode_lookupshare"></div>
                       </div>
                            <div class="col-sm-4">
                                    <label  class="form-label"> Address</label>
                                    <input type="text" class="form-control" placeholder="Shareholder Address" name="shareholderaddress[]" id="shareholderaddress">
                            </div>
                                <div class="col-sm-4">
                                    <label  class="form-label"> Address 2</label>
                                    <input type="text" class="form-control" placeholder="Shareholder Address 2" name="shareholderaddress2[]" id="shareholderaddress2">
                                </div>
                              
                            </div>
                            <div class="row mt-4">
                                <div class="col-sm-3">
                                    <label  class="form-label"> City</label>
                                    <input type="text" class="form-control" placeholder="Shareholder City" name="shareholdercity[]" id="shareholdercity">
                                </div>
                                <div class="col-sm-3">
                                    <label  class="form-label">Shareholder Postcode</label>
                                    <input type="text" class="form-control" placeholder="Shareholder Postcode" name="shareholderzip[]" id="shareholderzip">
                                </div>
                                <div class="col-sm-3">
                                    
                                        <label  class="form-label">Number of shares</label>
                                        <input type="text" class="form-control" placeholder="Number of shares"  name="numberofshare[]">
                                </div>
                                <div class="col-sm-3">
                                    
                                    <label  class="form-label">shareholding percentage </label>
                                    <input type="text" class="form-control" placeholder="shareholding percentage "  name="sharepercentage[]">
                            </div>
                            </div>
                            
                      </div>
                </div>
            
        </div>    
    `
        $('#shareholder').append(html);
    })
    i = 0
    $('#adddirector').click(function(){
        
        i++
        console.log(i)
        var html;
        html =`<div class="row mt-4" id="director">
        <div class="card">
        <div class="card-header">
        Add Shareholder
        <button type="button" class="btn btn-danger" id="deletedirector">Delete Shareholder</button>
      </div>
              <div class="card-body">
                    <div class="row">
                        <div class="col-sm-4">
                            <label  class="form-label">First Name</label>
                            <input type="text" class="form-control" placeholder="First Name"  name="directorfirstname[]">
                        </div>
                        <div class="col-sm-4">
                            <label  class="form-label">Middle Name</label>
                          <input type="text" class="form-control" placeholder="Middle Name" name="directormiddlename[]">
                        </div>
                        <div class="col-sm-4">
                            <label  class="form-label">Last Name</label>
                          <input type="text" class="form-control" placeholder="Last Name" name="directorlastname[]">
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-sm-4">
                            <label  class="form-label">Director Date of Birth</label>
                            <input  data-toggle="datepicker" class="form-control" placeholder="Date of Birth" name="directordob[]">
                        </div>
                        <div class="col-sm-4">
                            <label  class="form-label">Director NI Number</label>
                            <input type="text" class="form-control" placeholder="Director NI Number" name="directornic[]">
                        </div>
                        <div class="col-sm-4">
                            <label  class="form-label">Director Nationality</label>
                            <select class="form-select" aria-label="Default select example" name="shareholdernationality[]">
                                <option value="">-- select one --</option>
                                <option value="afghan">Afghan</option>
                                <option value="albanian">Albanian</option>
                                <option value="algerian">Algerian</option>
                                <option value="american">American</option>
                                <option value="andorran">Andorran</option>
                                <option value="angolan">Angolan</option>
                                <option value="antiguans">Antiguans</option>
                                <option value="argentinean">Argentinean</option>
                                <option value="armenian">Armenian</option>
                                <option value="australian">Australian</option>
                                <option value="austrian">Austrian</option>
                                <option value="azerbaijani">Azerbaijani</option>
                                <option value="bahamian">Bahamian</option>
                                <option value="bahraini">Bahraini</option>
                                <option value="bangladeshi">Bangladeshi</option>
                                <option value="barbadian">Barbadian</option>
                                <option value="barbudans">Barbudans</option>
                                <option value="batswana">Batswana</option>
                                <option value="belarusian">Belarusian</option>
                                <option value="belgian">Belgian</option>
                                <option value="belizean">Belizean</option>
                                <option value="beninese">Beninese</option>
                                <option value="bhutanese">Bhutanese</option>
                                <option value="bolivian">Bolivian</option>
                                <option value="bosnian">Bosnian</option>
                                <option value="brazilian">Brazilian</option>
                                <option value="british">British</option>
                                <option value="bruneian">Bruneian</option>
                                <option value="bulgarian">Bulgarian</option>
                                <option value="burkinabe">Burkinabe</option>
                                <option value="burmese">Burmese</option>
                                <option value="burundian">Burundian</option>
                                <option value="cambodian">Cambodian</option>
                                <option value="cameroonian">Cameroonian</option>
                                <option value="canadian">Canadian</option>
                                <option value="cape verdean">Cape Verdean</option>
                                <option value="central african">Central African</option>
                                <option value="chadian">Chadian</option>
                                <option value="chilean">Chilean</option>
                                <option value="chinese">Chinese</option>
                                <option value="colombian">Colombian</option>
                                <option value="comoran">Comoran</option>
                                <option value="congolese">Congolese</option>
                                <option value="costa rican">Costa Rican</option>
                                <option value="croatian">Croatian</option>
                                <option value="cuban">Cuban</option>
                                <option value="cypriot">Cypriot</option>
                                <option value="czech">Czech</option>
                                <option value="danish">Danish</option>
                                <option value="djibouti">Djibouti</option>
                                <option value="dominican">Dominican</option>
                                <option value="dutch">Dutch</option>
                                <option value="east timorese">East Timorese</option>
                                <option value="ecuadorean">Ecuadorean</option>
                                <option value="egyptian">Egyptian</option>
                                <option value="emirian">Emirian</option>
                                <option value="equatorial guinean">Equatorial Guinean</option>
                                <option value="eritrean">Eritrean</option>
                                <option value="estonian">Estonian</option>
                                <option value="ethiopian">Ethiopian</option>
                                <option value="fijian">Fijian</option>
                                <option value="filipino">Filipino</option>
                                <option value="finnish">Finnish</option>
                                <option value="french">French</option>
                                <option value="gabonese">Gabonese</option>
                                <option value="gambian">Gambian</option>
                                <option value="georgian">Georgian</option>
                                <option value="german">German</option>
                                <option value="ghanaian">Ghanaian</option>
                                <option value="greek">Greek</option>
                                <option value="grenadian">Grenadian</option>
                                <option value="guatemalan">Guatemalan</option>
                                <option value="guinea-bissauan">Guinea-Bissauan</option>
                                <option value="guinean">Guinean</option>
                                <option value="guyanese">Guyanese</option>
                                <option value="haitian">Haitian</option>
                                <option value="herzegovinian">Herzegovinian</option>
                                <option value="honduran">Honduran</option>
                                <option value="hungarian">Hungarian</option>
                                <option value="icelander">Icelander</option>
                                <option value="indian">Indian</option>
                                <option value="indonesian">Indonesian</option>
                                <option value="iranian">Iranian</option>
                                <option value="iraqi">Iraqi</option>
                                <option value="irish">Irish</option>
                                <option value="israeli">Israeli</option>
                                <option value="italian">Italian</option>
                                <option value="ivorian">Ivorian</option>
                                <option value="jamaican">Jamaican</option>
                                <option value="japanese">Japanese</option>
                                <option value="jordanian">Jordanian</option>
                                <option value="kazakhstani">Kazakhstani</option>
                                <option value="kenyan">Kenyan</option>
                                <option value="kittian and nevisian">Kittian and Nevisian</option>
                                <option value="kuwaiti">Kuwaiti</option>
                                <option value="kyrgyz">Kyrgyz</option>
                                <option value="laotian">Laotian</option>
                                <option value="latvian">Latvian</option>
                                <option value="lebanese">Lebanese</option>
                                <option value="liberian">Liberian</option>
                                <option value="libyan">Libyan</option>
                                <option value="liechtensteiner">Liechtensteiner</option>
                                <option value="lithuanian">Lithuanian</option>
                                <option value="luxembourger">Luxembourger</option>
                                <option value="macedonian">Macedonian</option>
                                <option value="malagasy">Malagasy</option>
                                <option value="malawian">Malawian</option>
                                <option value="malaysian">Malaysian</option>
                                <option value="maldivan">Maldivan</option>
                                <option value="malian">Malian</option>
                                <option value="maltese">Maltese</option>
                                <option value="marshallese">Marshallese</option>
                                <option value="mauritanian">Mauritanian</option>
                                <option value="mauritian">Mauritian</option>
                                <option value="mexican">Mexican</option>
                                <option value="micronesian">Micronesian</option>
                                <option value="moldovan">Moldovan</option>
                                <option value="monacan">Monacan</option>
                                <option value="mongolian">Mongolian</option>
                                <option value="moroccan">Moroccan</option>
                                <option value="mosotho">Mosotho</option>
                                <option value="motswana">Motswana</option>
                                <option value="mozambican">Mozambican</option>
                                <option value="namibian">Namibian</option>
                                <option value="nauruan">Nauruan</option>
                                <option value="nepalese">Nepalese</option>
                                <option value="new zealander">New Zealander</option>
                                <option value="ni-vanuatu">Ni-Vanuatu</option>
                                <option value="nicaraguan">Nicaraguan</option>
                                <option value="nigerien">Nigerien</option>
                                <option value="north korean">North Korean</option>
                                <option value="northern irish">Northern Irish</option>
                                <option value="norwegian">Norwegian</option>
                                <option value="omani">Omani</option>
                                <option value="pakistani">Pakistani</option>
                                <option value="palauan">Palauan</option>
                                <option value="panamanian">Panamanian</option>
                                <option value="papua new guinean">Papua New Guinean</option>
                                <option value="paraguayan">Paraguayan</option>
                                <option value="peruvian">Peruvian</option>
                                <option value="polish">Polish</option>
                                <option value="portuguese">Portuguese</option>
                                <option value="qatari">Qatari</option>
                                <option value="romanian">Romanian</option>
                                <option value="russian">Russian</option>
                                <option value="rwandan">Rwandan</option>
                                <option value="saint lucian">Saint Lucian</option>
                                <option value="salvadoran">Salvadoran</option>
                                <option value="samoan">Samoan</option>
                                <option value="san marinese">San Marinese</option>
                                <option value="sao tomean">Sao Tomean</option>
                                <option value="saudi">Saudi</option>
                                <option value="scottish">Scottish</option>
                                <option value="senegalese">Senegalese</option>
                                <option value="serbian">Serbian</option>
                                <option value="seychellois">Seychellois</option>
                                <option value="sierra leonean">Sierra Leonean</option>
                                <option value="singaporean">Singaporean</option>
                                <option value="slovakian">Slovakian</option>
                                <option value="slovenian">Slovenian</option>
                                <option value="solomon islander">Solomon Islander</option>
                                <option value="somali">Somali</option>
                                <option value="south african">South African</option>
                                <option value="south korean">South Korean</option>
                                <option value="spanish">Spanish</option>
                                <option value="sri lankan">Sri Lankan</option>
                                <option value="sudanese">Sudanese</option>
                                <option value="surinamer">Surinamer</option>
                                <option value="swazi">Swazi</option>
                                <option value="swedish">Swedish</option>
                                <option value="swiss">Swiss</option>
                                <option value="syrian">Syrian</option>
                                <option value="taiwanese">Taiwanese</option>
                                <option value="tajik">Tajik</option>
                                <option value="tanzanian">Tanzanian</option>
                                <option value="thai">Thai</option>
                                <option value="togolese">Togolese</option>
                                <option value="tongan">Tongan</option>
                                <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                <option value="tunisian">Tunisian</option>
                                <option value="turkish">Turkish</option>
                                <option value="tuvaluan">Tuvaluan</option>
                                <option value="ugandan">Ugandan</option>
                                <option value="ukrainian">Ukrainian</option>
                                <option value="uruguayan">Uruguayan</option>
                                <option value="uzbekistani">Uzbekistani</option>
                                <option value="venezuelan">Venezuelan</option>
                                <option value="vietnamese">Vietnamese</option>
                                <option value="welsh">Welsh</option>
                                <option value="yemenite">Yemenite</option>
                                <option value="zambian">Zambian</option>
                                <option value="zimbabwean">Zimbabwean</option>
                              </select>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-sm-4">
                            <label  class="form-label">Director Place of Birth</label>
                            <input  data-toggle="datepicker" class="form-control" placeholder="Place of Birth" name="directorplaceofbirth[]">
                        </div>
                        <div class="col-sm-4">
                            <label  class="form-label">Director Passport Number</label>
                            <input  data-toggle="datepicker" class="form-control" placeholder="Passport Number" name="directorpassno[]">
                        </div>
                        <div class="col-sm-4">
                            <label  class="form-label">Director Mobile Number</label>
                            <input  data-toggle="datepicker" class="form-control" placeholder="Mobile Number" name="directormobno[]">
                        </div>
                    </div>
                    
                   <div class="row mt-4">
                    <div class="col-sm-4">
                        <label  class="form-label">Enter your postcode</label>

                        <div id="postcode_lookupdir"></div>
                    </div>
                    <div class="col-sm-4">
                            <label  class="form-label">Director Address</label>
                            <input type="text" class="form-control" placeholder="Address" name="directoraddress[]" id="directoraddress">
                    </div>
                        <div class="col-sm-4">
                            <label  class="form-label">Director Address 2</label>
                            <input type="text" class="form-control" placeholder="Address 2" name="directoraddress2[]" id="directoraddress2">
                        </div>
                      
                    </div>
                    <div class="row mt-4">
                        <div class="col-sm-4">
                            <label  class="form-label">Director City</label>
                            <input type="text" class="form-control" placeholder="City" name="directorcity[]" id="directorcity">
                        </div>
                        <div class="col-sm-4">
                            <label  class="form-label">Director Postcode</label>
                            <input type="text" class="form-control" placeholder="Postcode" name="directorzip[]" id="directorzip">
                        </div>
                        <div class="col-sm-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="checked" id="shareholderse" name="isshareholder[]">
                                <label class="form-check-label" for="flexCheckDefault">
                                  Add Him as Shareholder
                                </label>
                              </div>
                            <div id="sharecount" class="none">
                                <div class="col-sm-6">
                            
                            <label  class="form-label">Number of shares</label>
                            <input type="text" class="form-control" placeholder="Number of shares"  name="numberofshare[]">
                    </div>
                    <div class="col-sm-6">
                        
                        <label  class="form-label">shareholding percentage </label>
                        <input type="text" class="form-control" placeholder="shareholding percentage "  name="sharepercentage[]">
                </div>
                            </div>
                            </div>
                    </div>
                    
              </div>
        </div>
    
</div>`
$('#director').append(html);
    })
    
    $(document).on('click', '#deletedirector', function() {
                console.log('bi')
                $(this).closest('#director').remove();
            });
            $(document).on('click', '#deleteshareholder', function() {
                console.log('bi')
                $(this).closest('#shareholder').remove();
            });
           
            
    });
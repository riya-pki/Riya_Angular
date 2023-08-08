$(document).ready(function() {

    /* Handling the ticking of Select All checkbox */
    $('#rTM_cP_selectAll').on('change',function(){
        if(this.checked){
            $('#rTM_cP_checkAll input:checkbox').each(function(){
                this.checked = true;
                $(this).trigger("change");
            });
        }else{
            $('#rTM_cP_checkAll input[type="checkbox"]').each(function(){
                this.checked = false;
                $(this).trigger("change");
            })
        }
    });

    /* Handling the case of deselecting Select All if any of the checkboxes are unticked  */
    $('#rTM_cP_checkAll input:checkbox').on('change',function(){
            if($('#rTM_cP_checkAll input:checkbox:checked').length == $('#rTM_cP_checkAll input:checkbox').length){
                $('#rTM_cP_selectAll').prop('checked',true);
            }else{
                $('#rTM_cP_selectAll').prop('checked',false);
            }
    });

    /* Handling the click on main menu options in popup*/
    $("[data-pmenu]").on('change',function(){

        var curid = $(this).attr("id");
        console.log('reached pmenu', $('#'+curid+'_options').length);
    
        if (this.checked){
            $('#'+curid+'_options input:checkbox').each(function(){
                this.checked = true;
                $(this).trigger("change");

            });
            $('#'+curid+'_accordion').removeClass("d-none");
            //$('#'+curid+'_accordion_data').addClass("collapse");
        } else {
            $('#'+curid+'_options input:checkbox').each(function(){
                this.checked = false;
                $(this).trigger("change");
            });
            $('#'+curid+'_accordion').addClass("d-none");
            //$('#'+curid+'_accordion_data').removeClass("collapse");
        }
        if ($('#'+curid+'_options').length==0) { /* case if submenu does not exists*/
            handleCaption(curid);
        }
    });

    /* Handling the display of sections when each of the sub menu options are clicked*/
    $(".menuoptions").on('change',function(){
        var curid = $(this).attr("data-pmenu-section");
        var splt = curid.split('_');
        var parent = splt[0];
        if($('#'+parent+'_options input:checkbox:checked').length >0){
            $('#'+parent).prop('checked',true);
            $('#'+parent+'_accordion').removeClass("d-none");
            //$('#'+parent+'_accordion_data').removeClass("collapse");
        } else {
            $('#'+parent).prop('checked',false);
            $('#'+parent+'_accordion').addClass("d-none");
            //$('#'+parent+'_accordion_data').addClass("collapse");
        }
        
        handleCaption(parent);
      

        if(this.checked) {
            $('[data-msection="'+curid + '"]').removeClass("d-none");
        } else {
            $('[data-msection="'+curid + '"]').addClass("d-none");
        }
    });

    /* Handling the display of headers for dynamic sections */
    function handleCaption(parent) {
        console.log('exists', parent ,$('#'+parent).attr("data-phideprefix"));
        if ($('#'+parent).attr("data-phideprefix")== undefined) {
            var heading = '';
            $('#'+parent+'_options input:checkbox').each(function(){
                if (this.checked) {
                    if (heading!='') {
                        heading = heading + ', ' + $(this).attr("value");
                    } else {
                        heading = $(this).attr("value");
                    }
                }
            });
            if (heading!= '') {
                heading = $('#'+parent).attr("value") + ' ' + heading;
            } else {
                heading = $('#'+parent).attr("value");
            }
           
            $('#'+parent+'_accordion_caption').html(heading);
        } else {
            $('#'+parent+'_accordion_caption').html('');
        }
    }

    /* Handling the ticking of Select All checkbox for section Relevant Findings and Interpretation */
    $('#relevantmain').on('change',function(){
        if(this.checked){
            $('#relevant_All input:checkbox').each(function(){
                this.checked = true;
                $(this).trigger("change");
                $("#rFI_accordion").removeClass("d-none");
            })
        }else{
            $('#relevant_All input[type="checkbox"]').each(function(){
                this.checked = false;
                $(this).trigger("change");
                $("#rFI_accordion").addClass("d-none");
            })
        }
    });

    /* Handling the case of selecting or deselecting the checkbox "Relevant findings and interpretations" based on whether 
    one tickbox is ticked */

    $('#relevant_All input:checkbox').on('change',function(){
        if($('#relevant_All input:checkbox:checked').length >0){
            $('#relevantmain').prop('checked',true);
            $("#rFI_accordion").removeClass("d-none");
        }else{
            $('#relevantmain').prop('checked',false);
            $("#rFI_accordion").addClass("d-none");
        }
    });

     /* Handling the ticking of Select All checkbox for section Findings Unrelated to Phenotypes */
     $('#phenotypesmain').on('change',function(){
        if(this.checked){
            $('#phenotypes_All input:checkbox').each(function(){
                this.checked = true;
                $(this).trigger("change");
                $("#fUP_accordion").removeClass("d-none");
            })
        }else{
            $('#phenotypes_All input[type="checkbox"]').each(function(){
                this.checked = false;
                $(this).trigger("change");
                $("#fUP_accordion").addClass("d-none");
            })
        }
    });

    /* Handling the case of selecting or deselecting the checkbox "Findings Unrelated to Phenotypes" based on whether 
    one tickbox is ticked */

    $('#phenotypes_All input:checkbox').on('change',function(){
        if($('#phenotypes_All input:checkbox:checked').length >0){
            $('#phenotypesmain').prop('checked',true);
            $("#fUP_accordion").removeClass("d-none");
        }else{
            $('#phenotypesmain').prop('checked',false);
            $("#fUP_accordion").addClass("d-none");
        }
    });
    
// Handling Template Color - Theme selection
    $('.tempColor_select').on('change', function() {
       console.log('onchnage',this.value);
       //$('#accordionRTM2').addClass(this.value);
       $("#accordionRTM2").attr("class", "accordion pt-5 "+this.value);
      });
});


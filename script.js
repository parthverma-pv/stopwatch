$(document).ready(function(){
    let startTime = null;
    let elapsed = 0;
    let inter = 0;
    var content = $('#main');
    function startStopwatch(){
        startTime = performance.now() - elapsed;
        resumeStopwatch();
    }

    function resumeStopwatch(){
        clearInterval(inter);
        startTime = performance.now() - elapsed;
        inter = setInterval(updateStopwatch, 10);
    }

    function updateStopwatch(){
        elapsed = (performance.now() - startTime);
        content.text((elapsed/1000).toFixed(3));
    }

    function resetStopwatch(){
        clearInterval(inter);
        elapsed = 0;
        content.text(elapsed.toFixed(2));
        
    }

    function pauseStopwatch(){
        clearInterval(inter);
    }


    $('#start-button').click(function(){  
        if($(this).text() === 'Start'){
            startStopwatch();
            $('#pause-resume-button').text('Pause');
            $(this).fadeOut(100,function(){
                $('#reset-button, #pause-resume-button').fadeIn(100);
            });
            
        }
    });

    $('#reset-button').click(function(){
        $('#reset-button, #pause-resume-button').fadeOut(250,function(){
            $('#start-button').fadeIn(250);
        });
        resetStopwatch();
    });

    $('#pause-resume-button').click(function(){
        if($(this).text() === 'Pause'){
            $(this).text('Resume');
            pauseStopwatch();
        }
        else{
            $(this).text('Pause');
            resumeStopwatch();
        }
    });

});



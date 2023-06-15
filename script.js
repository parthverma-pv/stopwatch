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
        content.text((elapsed/1000).toFixed(2));
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
            $(this).addClass('hidden');
            $('#reset-button, #pause-resume-button').removeClass('hidden');
        }
    });

    $('#reset-button').click(function(){
        $('#reset-button, #pause-resume-button').addClass('hidden');
        $('#start-button').removeClass('hidden');
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



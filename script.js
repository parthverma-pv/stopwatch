$(document).ready(function(){
    let startTime = null;
    let elapsed = 0;
    let inter = 0;
    let laptext = '';
    let lapcount = 0;
    let lastlap = 0;
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
        content.text(elapsed.toFixed(3));
        
    }

    function pauseStopwatch(){
        clearInterval(inter);
    }


    $('#start-button').click(function(){  
        if($(this).text() === 'Start'){
            startStopwatch();
            $('#pause-resume-button').text('Pause');
            $(this).fadeOut(100,function(){
                $('#reset-lap-button, #pause-resume-button').fadeIn(100);
            });
            
        }
    });

    $('#reset-lap-button').click(function(){
        if($(this).text() === 'Reset'){
            $('#reset-lap-button, #pause-resume-button').fadeOut(250,function(){
                $('#start-button').fadeIn(250);
                $('#reset-lap-button').text('Lap');
            });
            lapcount = 0;
            laptext = '';
            lastlap = 0;
            $('#lap').text(laptext);
            resetStopwatch();
        }
        else{
            lapcount++;
            laptime = elapsed - lastlap;
            const padLapcount = lapcount.toString().padStart(2, '0');
            lapdiv = document.createElement('div');
            lapdiv.id = 'lapdiv';
            laptext = `<span>Lap ${padLapcount}</span> <span>${(laptime/1000).toFixed(3)}</span>`;
            lapdiv.innerHTML = laptext;
            $('#lap').prepend(lapdiv); 
            lastlap = elapsed
        }
    });

    $('#pause-resume-button').click(function(){
        if($(this).text() === 'Pause'){
            $(this).text('Resume');
            $('#reset-lap-button').text('Reset');
            pauseStopwatch();
        }
        else{
            $('#reset-lap-button').text('Lap');
            $(this).text('Pause');
            resumeStopwatch();
        }
    });

});



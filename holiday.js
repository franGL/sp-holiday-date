window.onload = function() {
    /**
     * 
     * @param {Object} holiday 
     * @param {Date} time 
     * @param {Integer} duration 
     * 
     * duration -> represents seconds
     */
    function addBussinessTime(holiday, time, duration) {
        let returnDate = null;
        let miliSeconds = duration * 1000;

        if (time.getTime() < holiday.start.getTime()) { /* Fecha anterior al día festivo */
            returnDate = time.getTime() + miliSeconds;
        } else {
            returnDate = duration < 0 
                ? (holiday.start.getTime() + (miliSeconds)) 
                : (holiday.end.getTime() + miliSeconds);
        }

        return new Date(returnDate);
    }

    const holiday = {
        start: new Date('2019-12-24T21:00:00'),
        end: new Date('2019-12-25T21:00:00')
    }

    let initialPastDate = new Date('2019-12-12T18:00:00');
    let initialRangeDate = new Date('2019-12-24T23:00:00');
    let initialNextNegativeDate = new Date('2019-12-25T00:00:00');
    let initialNextPositiveDate = new Date('2019-12-25T00:00:00');
    
    pastDate = addBussinessTime(holiday, initialPastDate, 1);
    rangeDate = addBussinessTime(holiday, initialRangeDate, 3600);
    nextNegativeDate = addBussinessTime(holiday, initialNextNegativeDate, -20);
    nextPositiveDate = addBussinessTime(holiday, initialNextPositiveDate, 20);

    document.getElementById('pastDate').innerText = 'La fecha ' + initialPastDate + ' ahora es ' + pastDate;
    document.getElementById('rangeDate').innerText = 'La fecha ' + initialRangeDate + ' ahora es ' + rangeDate;
    document.getElementById('nextNegativeDate').innerText = 'La fecha ' + initialNextNegativeDate + ' ahora es ' +  nextNegativeDate;
    document.getElementById('nextPositiveDate').innerText = 'La fecha ' + initialNextNegativeDate + ' ahora es ' +  nextPositiveDate;
}
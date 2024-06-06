document.addEventListener('DOMContentLoaded', () => {
    const holidays = {
        '2024-01-01': 'New Year\'s Day',
        '2024-01-15': 'Martin Luther King Jr. Day',
        '2024-02-19': 'Presidents\' Day',
        '2024-05-27': 'Memorial Day',
        '2024-07-04': 'Independence Day',
        '2024-09-02': 'Labor Day',
        '2024-10-14': 'Columbus Day',
        '2024-11-11': 'Veterans Day',
        '2024-11-28': 'Thanksgiving Day',
        '2024-12-25': 'Christmas Day',
        // Add more holidays here
    };

    const calendar = document.getElementById('calendar');
    const monthYear = document.getElementById('month-year');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    let date = new Date();

    function renderCalendar() {
        calendar.innerHTML = '';
        const month = date.getMonth();
        const year = date.getFullYear();
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        
        monthYear.textContent = `${monthNames[month]} ${year}`;
        
        let table = '<table>';
        table += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';
        
        let day = 1;
        for (let i = 0; i < 6; i++) {
            table += '<tr>';
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    table += '<td class="empty"></td>';
                } else if (day > daysInMonth) {
                    table += '<td class="empty"></td>';
                } else {
                    const currentDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    const isHoliday = holidays[currentDate] ? 'holiday' : '';
                    table += `<td class="${isHoliday}">${day}</td>`;
                    day++;
                }
            }
            table += '</tr>';
            if (day > daysInMonth) break;
        }
        table += '</table>';
        
        calendar.innerHTML = table;
    }

    prevMonthBtn.addEventListener('click', () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});

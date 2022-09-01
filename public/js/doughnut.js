const data = {
    labels: [
      'Auto and Transport',
      'Bills & Utilities',
      'Business Services',
      'Bills & Utilities',
      'Education',
      'Entertainment',
      'Fees and Charges',
      'Financial',
      'Food & Dining',
      'Gifts & Donations',
      'Health & Fitness',
      'Home',
      'Income',
      'Investments',
      'Kids',
      'Loan Payments',
      'Misc Expenses',
      'Personal Care',
      'Pets',
      'Shopping',
      'Taxes',
      'Transfer',
      'Travel',
      'Uncategorized'
    ],
    datasets: [{
      label: 'Spending Summary',
      data: [300, 50, 100, 25, 12, 25, 36, 400, 15, 75, 300, 50, 100, 25, 12, 25, 36, 400, 15, 75, 69, 420, 50],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
          },
        cutoutPercentage: 85,
        animation: {
            animateScale: true
        },
        responsive: true,
        maintainAspectRatio: false
    }
  };

  const myChart = new Chart(
    document.getElementById('student-doughnut-chart'),
    config
);
    
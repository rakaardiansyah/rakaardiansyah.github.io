function dayOfYearFromWeekInfo(config) {
    var hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    var bulan = ['Januari', 'Februari', 'Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

    var tanggal = new Date().getDate();
    var xhari = new Date().getDay();
    var xbulan = new Date().getMonth();
    var xtahun = new Date().getYear();

    var hari = hari[xhari];
    var bulan = bulan[xbulan];
    var tahun = (xtahun < 1000)?xtahun + 1900 : xtahun;
    document.write(hari +', ' + tanggal + ' ' + bulan + ' ' + tahun);
}
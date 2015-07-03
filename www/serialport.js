var serialport = {
    SerialPort: function(device, baudrate, flags, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'SerialPort', // mapped to our native Java class called "Calendar"
            'SerialPort', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "device": device,
                "baudrate": baudrate,
                "flags": flags
            }]
        ); 
     }
}

module.exports = serialport;

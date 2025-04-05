//READONLY - makes all properties of a type readonly. This is useful when you want to prevent the properties of an object from being changed. like when you have a configuration object that should not be altered after initialization.

type Config ={
   endpoint: string;        //or write readonly endpoint: string;
   apikey: number;
}

const config : Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apikey: 1234567890,
};
  

//config.apikey = 0987654321; // This will give an error because the apikey property is readonly.

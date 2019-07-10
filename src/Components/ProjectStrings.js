import LocalizedStrings from "react-native-localization";

export let projectStrings = new LocalizedStrings({
         en: {
           lang: "en",
           //String of OnBoarding Page
           welcomeText: "Welcome to Agro",
           descText:
             "A complete inventory and stock \n management system for farmer",
           signUp: "SIGN UP",
           login: "LOGIN",
           termsConditionText:
             "By Continuing.you agree to our Terms \n & Conditions.",

           //Strings of Login Page
           toastInvalidEmail: "Please Enter Email Correctly",
           toastShortPassword: "Password too short",
           toastFillAllDetails: "Please fill all the details",
           toastInvalidEmailPassword: "Invalid email/password",
           toastUserLoogedIn: "Logged in successfully",
           loginTitle:
             "Login to your Agro account by filling following details.Don't have an account?",
           forgetPassword: "Forget Password ",

           //Strings of signup Page
           toastValidName: "Enter a valid fullname",
           signupTitle:
             "It only takes a couple of minutes to create a \n account.Have an account? ",
           fullName: "Full Name",
           email: "Email",
           nationalId: "National id",
           mobile: "Mobile",
           password: "Password",

           //Strings of forgetPassword
           forgetPasswordTitle: "FORGOT PASSWORD",
           forgetPasswordDesc:
             "Enter your registered mobile number and we'll \n send you OTP to reset your password. ",
           sendCode: "SEND CODE ",

           //Strings of verification page
           toastInvalidOtp: "Invalid OTP",
           toastOTPVerified: "OTP has been verified",
           enterOTP:
             "Enter the 4 digit code we sent to the mobile number provided via SMS. Please check your phone and enter the PIN below",
           verificationCanResend: "You can now resend the OTP.",
           codeExpire: "Code expire in",
           didntGetCode: "Didn't get the code?",
           resendOTP: "Resend the code.",
           mobileUpdateOnOtp: "Want to change your number instead!",
           textVerifyOtpButton: "SAVE CHANGES",
           modalUpadateMobileOnOtp: "Enter your mobile number",
           verification: "VERIFICATION",
           updateNumber: "Update Number",
           //Strings of ResetPassword
           resetPassword: "RESET PASSWORD",
           resetPasswordTitle:
             "Create a new Agro account password atleast 8 characters long.(Password will be case sensitive)",
           newPassword: "New Password",
           confirmPassword: "Confirm Password",
           enterPassword: "Please fill the password",
           matchPassword: "Password and Confirm Password do not match",

           //Strings of location page
           toastLocation: "Enter your location",
           typeLocation: "Start typing a location",
           detectLocation: "Detect my Location",
           locationTitle:
             "Type minimum three characters for \n location suggesstion",
           saveLocation: "SAVE LOCATION",
           selectLocation: "Select Location",
           checkLocation: "Agro wants to use your device's location?",
           yes: "YES",
           no: "NO",

           //Strings of Home page
           hello: "Hello",
           homeTagline: "Let's go...Let's grow...",
           addStock: "Add Stock",
           orders: "Orders",
           myList: "My List",
           reports: "Reports",

           //Strings of AddStock page
           categoryTitle: "Let's put in a Category.",
           back: "Back",
           next: "Next",
           toastCategory: "Please select a category",
           choose: "Choose",

           //Strings of AddCategory page
           addcategoryTitle: "Let's put in a sub category.",
           toastSelectCategory: "Please select a sub category",
           done: "Done",

           //Strings of AddDuration page
           addDurationTitle: "Let's select Duration.",
           toastSelectDuration: "Please select a valid duration!",

           //Strings of AddQuantity Page
           addQuantityTitle: "Let's set a quantity.",
           toastSelectQuantity: "Please set a quantity",
           toastSelectUnit: "Please select a unit'",
           selectUnit: "Select Unit",
           enterQuantity: "Enter a quantity",

           //Strings of AddMinimumOrder
           toastQuantity: "Please set a minimum order quantity",
           addMinQuantityTitle: "Let's set a minimum order quantity.",
           toastminimumQantity:
             "Minimum Quantity will be less than Quantity!",

           //Strings of price page
           priceTitle: "Let's set right price below.",
           enterPrice: "Enter Price",
           toastPrice: "Please Enter the  Price",

           //Strings of Add Description
           descriptionTitle: "Let's write description below.",
           enterDescription: "Write Description",
           toastDescription: "Please write Description",

           //Strings of Add Description
           PostProductHeaderTitle: "List/Post Product",
           productSpecification: "Product Specification",
           chooseCategory: "Choose Category",
           timePeriod: "Time Period",
           quantity: "Quantity",
           productQuantity: "Product Quantity",
           minimumOrder: "Minimum Order",
           minimumOrderQuantity: "Minimum Order Quantity",
           price: "PRICE",
           upload: "UPLOAD",
           description: "Description",
           productDescription: "Product Description",

           //Strings of PostSuccess Page
           backToHome: "BACK TO HOME",

           //Strings of orders Page
           allOrders: "ALL ORDERS",

           //Strings of cancelled Page
           cancelled: "Cancelled",

           //Strings of ChangePassword page
           changePassword: "Change Password",
           oldPassword: "Old Password",

           //Strings of CustomerProfile
           rateandReview: "Rate & Review",
           deliveryHeader: "Delivered",
           customerProfileHeader: "Customer Profile",

           //Strings of EditPost page
           editPostHeaderTitle: "Edit Post",
           enterMinimumOrderQuantity:
             "Please enter a minimum order quantity",
           toastEnterProductPrice: "Please enter product price",
           category: "Category",
           consumeBtn: "CONSUME",
           to: "To",
           from: "From",
           minimumOrder: "Minimum Order",
           price: "Price",

           //Strings of EditProfile
           editProfileHeaderTitle: "Edit Profile",
           editProfileImage: "Edit Profile Image",

           //Strings of Inprogress
           inProgressHeaderTitle: "IN-PROGRESS",

           //Strings of MyList page
           myListHeaderTitle: "My List",
           deleteModalText:
             "Are you sure you want to delete this product.",
           yes: "YES",
           no: "NO",

           //Strings of OrderDetails page
           orderDetailsHeaderTitle: "Orders Details",

           //Strings of Logout Page
           toastUserLoggedOut: "Logged out successfully",

           //Strings of CheckPhone pasge
           toastMobileLength: "Mobile number is too short",
           toastInvalidMobile: "Mobile number is not valid",
           toastMobileExists: "Mobile number already exists",
           toastemailExists: "Email already exists",
           toastserverError: "Server Error",

           //Strings of Notification page,
           noNotification: "No Notification",
           notificationDesc: "You're up to date!would work well",
           noProduct: "No Product",

           //Strings of Profile page
           profileHeaderTitle: "Profile",
           notification: "Notification",
           editProfile: "Edit Profile",
           totalPost: "Total Post",
           totalOrder: "Total Order",
           settings: "Settings",
           logoutBtn: "LOGOUT",
           logoutModal: "Are you sure you want to logout agro.",
           cancel: "CANCEL",
           certificates: "Certificates",

           //Strings of Rating Modal
           fillRating: "Please give the rating",
           writeReview: "Write Your Review",
           submitBtn: "SUBMIT",
           rateThisProduct: "Rate this Product",

           //upcomingOrders page
           upcoming: "UPCOMING",

           //Strings of EmptyStateScreen Page
           notFound: "Not Found",
           noImages: "No Images",
           noInternet: "No Internet",

           //Strings of CancelledDetails pages
           cancelled: "CANCELLED",
           cancelledTitle: "Your Item was cancelled",
           cancelledDesc:
             "We have received your request to deliver an item \n in this order.this has been successfully delivered.",
           minQty: "Min Qty",
           code: "Code",
           viewProfile: "VIEW PROFILE",
           orderDetails: "ORDERS DETAILS",
           orderNo: "Order No",
           orderPlaced: "Order Placed",
           totalAmount: "Total Amount",
           shippingAddress: "Shipping Address",
           paymentMode: "Payment Mode",

           //String of CardList component
           farmer: "Farmer",
           editPost: "Edit POST",

           //String of DeliveredDetails Component
           delivered: "DELIVERED",
           deliveredTitle: "Your Item was delivered",
           deliveredDesc:
             "We have received your request to deliver an item \n in this order.this has been successfully delivered.",
           days: "Days",
           enterMaxDeliveryDistance: "Enter maximum delivery distance",
           enterDileveryDistance: "enter delivery distance",
           //Strings of OrdersCard page
           orderRequest: "Order Request",
           orderQuantity: "Order Quantity",
           requestOrder: "Request Order",
           viewDetails: "View Details",
           km: "Km",

           //Strings of ProgressDetails page
           status: "Status",
           progressTitle: "Your item has been Placed",
           progressDesc:
             "We have received your request to place an item \n in this order.",

           //Strings of UpcomingDetails page
           location: "Location",
           accept: "ACCEPT",
           ignore: "IGNORE",
           noReport: "No Reports",
           //Strings of DeliveredDetails page
           deliveryDetailsTitle: "Let's Add delivery details below.",
           enterMinDeliveryDays: "enter minimum delivery days",
           minimumDeliveryDays: "Minimum delivery days",
           enterMaxDeliveryDays: "enter maximum delivery days",
           maximumDeliveryDays: "Maximum delivery days",
           deliveryDetails: "Delivery Details",
           days: "Days",
           toastEnterMaxDeliveryDays:
             "Please Enter maximum delivery days",
           toastEnterMinDeliveryDays:
             "Please Enter minimum delivery days",
           toastInvalidDays:
             "Minimum Days will be less than Maximum days",

           //New String
           pending: "Pending",
           inProgress: "In-Progress",
           delivered: "Delivered",
           cancelOrder: "CANCEL ORDER",
           //String of CancelOrders page
           cancelOrders: "Cancel Order",
           enterReason: "Please enter the reason of cancellation",
           tellUsReason: "Please tell us the reasons for cancellation?",
           reasonForCancellation: "Reason for cancellation*",
           additionalRemarks: "Additional Remarks",
           enterRemarks: "enter remarks(optional)",
           confirm: "CONFIRM",
           accountDetails:"Account Details",
           addAccount:'Add Account',
           progressOn:'Progress On',
           deliveredOn:'Delivered On',
           cancelledOn:'Cancelled On',
           save:'SAVE',
           pickUpAddress:'Pick Up Address'
         },
         es: {
           lang: "es",
           //String of OnBoarding Page
           welcomeText: "Bienvenido a Agroapp",
           descText:
             "Un sistema completo de \n gestión de inventario y abastecimiento \n para el campesino",
           signUp: "REGISTTATE",
           login: "INICIAR SESIÓN",
           termsConditionText:
             "Al continuar usted acepta nuestros Terminos \n & Condiciones.",

           //Strings of Login Page
           toastInvalidEmail:
             "Por favor ingrese una dirección de correo válida",
           toastShortPassword: "La Contraseña es muy corta",
           toastFillAllDetails: "Por favor ingrese todos los detalles",
           toastInvalidEmailPassword:
             "dirección de correo/contraseña inválidas",
           toastUserLoogedIn: "Inició sesión exitósamente",
           loginTitle:
             "Inicie sesión con su cuenta de Agroapp ingresando los siguientes detalles. No tiene una cuenta?",
           forgetPassword: "Olvidó su contraseña ",

           //Strings of signup Page
           toastValidName: "Ingrese un nombre válido",
           signupTitle:
             "Sólo toma un par de minutos para crear una \n cuenta. Tiene una cuenta? ",
           fullName: "Nombre completo",
           email: "Dirección de correo",
           nationalId: "Identificación",
           mobile: "Teléfono celular",
           password: "Contraseña",

           //Strings of forgetPassword
           forgetPasswordTitle: "OLVIDO CONTRASEÑA",
           forgetPasswordDesc:
             "Ingrese su número celular registrado y nosotros \n le enviaremos su OTP para reestablecer su contraseña ",
           sendCode: "ENVIAR CODIGO ",

           //Strings of verification page
           toastInvalidOtp: "OTP Inválido",
           toastOTPVerified: "OTP ha sido verificado",
           enterOTP:
             "Ingrese el código de 4 dígitos que le enviamos vía mensaje de texto al teléfono celular proporcionado. Ingrese el código",
           verificationCanResend: "Puede reenviar el OTP.",
           codeExpire: "Código expira en",
           didntGetCode: "¿No recibió el código?",
           resendOTP: "Reenviar código.",
           mobileUpdateOnOtp: "Quiere cambiar su teléfono celular!",
           textVerifyOtpButton: "GUARDAR CAMBIOS",
           modalUpadateMobileOnOtp: "Ingrese su teléfono celular",
           verification: "VERIFICACION",
           updateNumber: "Actualizar teléfono celular",
           //Strings of ResetPassword
           resetPassword: "REESTABLECER CONTRASEÑA",
           resetPasswordTitle:
             "Cree una contraseña para su cuenta de Agroapp con al menos 8 caracteres (La contraseña será sensible a mayúsculas)",
           newPassword: "Nueva Contraseña",
           confirmPassword: "Confirmar Contraseña",
           enterPassword: "Por favor ingrese Contraseña",
           matchPassword:
             "La Contraseña y la Confirmación de Contraseña no coinciden",

           //Strings of location page
           toastLocation: "Ingrese su ubicación",
           typeLocation: "Empiece a escribir su ubicación",
           detectLocation: "Detectar mi ubicación",
           locationTitle:
             "Ingrese mínimo 3 caracteres para \n la sugerencia de la ubicación",
           saveLocation: "GUARDAR UBICACION",
           selectLocation: "Seleccionar Ubicación",
           checkLocation:
             "Desea permitir que Agroapp use la Ubicación de su dispositivo?",
           yes: "SI",
           no: "NO",

           //Strings of Home page
           hello: "Hola",
           homeTagline: "Cultivando juntos para un mejor futuro ",
           addStock: "Agregar Inventario",
           orders: "Ordenes",
           myList: "Mis Listas",
           reports: "Reportes",

           //Strings of AddStock page
           categoryTitle: "Agregar a Categoría.",
           back: "Atrás",
           next: "Siguiente",
           toastCategory: "Por favor seleccione una Categoría",
           choose: "Seleccionar",

           //Strings of AddCategory page
           addcategoryTitle: "Agregar a Sub Categoría.",
           toastSelectCategory: "Por favor seleccione una Sub Categoría",
           done: "Listo",

           //Strings of AddDuration page
           addDurationTitle: "Seleccionar una Duración.",
           toastSelectDuration: "Por favor seleccione una Duración",

           //Strings of AddQuantity Page
           addQuantityTitle: "Seleccionar una Cantidad.",
           toastSelectQuantity: "Por favor seleccione una Cantidad",
           toastSelectUnit: "Por favor seleccione una Unidad'",
           selectUnit: "Seleccione Unidad",
           enterQuantity: "Ingrese cantidad",

           //Strings of AddMinimumOrder
           toastQuantity: "Please set a minimum order quantity",
           addMinQuantityTitle: "Let's set a minimum order quantity.",
           toastminimumQantity:
             "Minimum Quantity will be less than Quantity!",

           //Strings of price page
           priceTitle: "Seleccionar Precio.",
           enterPrice: "Ingrese el Precio",
           toastPrice: "Por favor ingrese el Precio",

           //Strings of Add Description
           descriptionTitle: "Ingresar descripción.",
           enterDescription: "Ingrese Descripción",
           toastDescription: "Por favor ingrese Descripción",

           //Strings of Add Description
           PostProductHeaderTitle: "Listar/Publicar Producto",
           productSpecification: "Especificación del Producto",
           chooseCategory: "Seleccionar Categoría",
           timePeriod: "Período de Tiempo",
           quantity: "Cantidad",
           productQuantity: "Cantidad del Producto",
           minimumOrder: "Orden Mínima",
           minimumOrderQuantity: "Cantidad Mínima del Producto",
           price: "PRECIO",
           upload: "CARGAR",
           description: "Descripción",
           productDescription: "Descripción del Producto",

           //Strings of PostSuccess Page
           backToHome: "REGRESAR A INICIO",

           //Strings of orders Page
           allOrders: "TODAS LAS ORDENES",

           //Strings of cancelled Page
           cancelled: "Cancelado",

           //Strings of ChangePassword page
           changePassword: "Cambiar Contraseña",
           oldPassword: "Contraseña anterior",

           //Strings of CustomerProfile
           rateandReview: "Calificación & Comentarios",
           deliveryHeader: "Envío",
           customerProfileHeader: "Perfil de usuario",

           //Strings of EditPost page
           editPostHeaderTitle: "Editar Publicación",
           enterMinimumOrderQuantity:
             "Por favor ingrese una Cantidad de Orden Mínima",
           toastEnterProductPrice:
             "Por favor ingrese el Precio del Producto",
           category: "Categoría",
           consumeBtn: "CONSUMIR",
           to: "De",
           from: "Para",
           minimumOrder: "Orden Mínima",
           price: "Precio",

           //Strings of EditProfile
           editProfileHeaderTitle: "Editar Perfil",
           editProfileImage: "Editar foto de Perfil",

           //Strings of Inprogress
           inProgressHeaderTitle: "EN PROGRESO",

           //Strings of MyList page
           myListHeaderTitle: "Mi Lista",
           deleteModalText:
             "Está seguro que desea eliminar este Producto?",
           yes: "SI",
           no: "NO",

           //Strings of OrderDetails page
           orderDetailsHeaderTitle: "Detalles de Orden",

           //Strings of Logout Page
           toastUserLoggedOut: "Finalizó Sesión exitósamente",

           //Strings of CheckPhone pasge
           toastMobileLength: "El Teléfono celular es muy corto",
           toastInvalidMobile: "El Teléfono celular no es válido",
           toastMobileExists:
             "El Teléfono celular ya está asociado a otra cuenta",
           toastemailExists:
             "Dirección de correo ya está asociada a otra cuenta",
           toastserverError: "Error de servidor",

           //Strings of Notification page,
           noNotification: "No hay Notificaciones",
           notificationDesc: "Está actualizado!",
           noProduct: "No hay Productos",

           //Strings of Profile page
           profileHeaderTitle: "Perfil",
           notification: "Notificationes",
           editProfile: "Editar Perfil",
           totalPost: "Total de Publicaciones",
           totalOrder: "Total de Ordenes",
           settings: "Ajustes",
           logoutBtn: "FINALIZAR SESION",
           logoutModal: "Está seguro que desea Finalizar Sesión?",
           cancel: "CANCELAR",
           certificates: "Certificaciones",

           //Strings of Rating Modal
           fillRating: "Por favor ingrese una Calificación",
           writeReview: "Ingrese comentarios",
           submitBtn: "ENVIAR",
           rateThisProduct: "Califique este producto",

           //upcomingOrders page
           upcoming: "PROXIMAS",

           //Strings of EmptyStateScreen Page
           notFound: "No se encontró",
           noImages: "No hay Imágenes",
           noInternet: "No hay conexión a internet",

           //Strings of CancelledDetails pages
           cancelled: "CANCELADO",
           cancelledTitle: "Su producto fue cancelado",
           cancelledDesc:
             "Hemos recibido una solicitud para entregar un producto \n en esta orden. Éste se ha entregado exitósamente.",
           minQty: "Cantidad Mín.",
           code: "Código",
           viewProfile: "VER PERFIL",
           orderDetails: "DETALLES DE ORDENES",
           orderNo: "Orden No",
           orderPlaced: "Orden Realizada",
           totalAmount: "Costo Total",
           shippingAddress: "Dirección de Envío",
           paymentMode: "Método de Pago",

           //String of CardList component
           farmer: "Campesino",
           editPost: "Editar PUBLICACION",

           //String of DeliveredDetails Component
           delivered: "ENTREGADO",
           deliveredTitle: "Su Producto fue entregado",
           deliveredDesc:
             "Hemos recibido una solicitud para entregar un producto \n en esta orden. Éste se ha entregado exitósamente.",
           days: "Días",
           enterMaxDeliveryDistance:
             "Ingrese Distancia Máxima para envío",
           enterDileveryDistance: "Ingrese distancia de envío",
           //Strings of OrdersCard page
           orderRequest: "Solicitud de Orden",
           orderQuantity: "Cantidad de Orden",
           requestOrder: "Solicitar Orden",
           viewDetails: "Ver Detalles",
           km: "Km",

           //Strings of ProgressDetails page
           status: "Estatus",
           progressTitle: "Su producto ha sido colocado",
           progressDesc:
             "Hemos recibido una solicitud para colocar un producto \n en esta orden.",

           //Strings of UpcomingDetails page
           location: "UBICACIÓN",
           accept: "ACEPTAR",
           ignore: "IGNORAR",
           noReport: "No hay Reportes",
           //Strings of DeliveredDetails page
           deliveryDetailsTitle: "Ingresar detalles de Envío.",
           enterMinDeliveryDays: "Ingrese mínimo de días para Envío",
           minimumDeliveryDays: "Mínimo de días para Envío",
           enterMaxDeliveryDays: "Ingrese máximo de días para Envío",
           maximumDeliveryDays: "Máximo de días para Envío",
           deliveryDetails: "Detalles de Envío",
           days: "Días",
           toastEnterMaxDeliveryDays:
             "Por favor ingrese máximo de días para Envío",
           toastEnterMinDeliveryDays:
             "Por favor ingrese mínimo de días para Envío",
           toastInvalidDays:
             "Mínimo de días será menor que el máximo de días"
         }
       });

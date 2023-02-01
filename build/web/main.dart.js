define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const colors = flutter_sdk.src__material__colors;
  const framework = flutter_sdk.src__widgets__framework;
  const binding = flutter_sdk.src__widgets__binding;
  const icon_data = flutter_sdk.src__widgets__icon_data;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const scroll_view = flutter_sdk.src__widgets__scroll_view;
  const list_tile = flutter_sdk.src__material__list_tile;
  const icon = flutter_sdk.src__widgets__icon;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const divider = flutter_sdk.src__material__divider;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var moedas = Object.create(dart.library);
  var moeda_repo = Object.create(dart.library);
  var moeda = Object.create(dart.library);
  var $toString = dartx.toString;
  var $_get = dartx._get;
  var $length = dartx.length;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    BuildContextAndintToListTile: () => (T.BuildContextAndintToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [framework.BuildContext, core.int])))(),
    BuildContextAndintToDivider: () => (T.BuildContextAndintToDivider = dart.constFn(dart.fnType(divider.Divider, [framework.BuildContext, core.int])))(),
    JSArrayOfMoeda: () => (T.JSArrayOfMoeda = dart.constFn(_interceptors.JSArray$(moeda.Moeda)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58359
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "file:///zapp/project/lib/main.dart",
    "file:///zapp/project/lib/pages/moedas.dart",
    "package:flutter_app/repositories/moeda_repo.dart",
    "package:flutter_app/models/moeda.dart"
  ];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.MeuApp = class MeuApp extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.MeuApp.new({key: key});
    }
    build(context) {
      return new app.MaterialApp.new({title: "Bem-vindo(a)", debugShowCheckedModeBanner: false, theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.indigo}), home: new moedas.MoedasPage.new()});
    }
  };
  (main.MeuApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.MeuApp.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.MeuApp.prototype;
  dart.addTypeTests(main.MeuApp);
  dart.addTypeCaches(main.MeuApp);
  dart.setMethodSignature(main.MeuApp, () => ({
    __proto__: dart.getMethods(main.MeuApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MeuApp, I[0]);
  main.main = function main$0() {
    binding.runApp(new main.MeuApp.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  moedas.MoedasPage = class MoedasPage extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new moedas.MoedasPage.new({key: key});
    }
    build(context) {
      let tabela = moeda_repo.MoedaRepo.tabela;
      let ico = C[1] || CT.C1;
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("~°")}), body: new scroll_view.ListView.separated({itemBuilder: dart.fn((context, moeda) => new list_tile.ListTile.new({leading: new icon.Icon.new(ico), title: new text.Text.new(tabela[$_get](moeda).nome), trailing: new text.Text.new(tabela[$_get](moeda).preco[$toString]())}), T.BuildContextAndintToListTile()), padding: new edge_insets.EdgeInsets.all(16), separatorBuilder: dart.fn((_, ___) => new divider.Divider.new(), T.BuildContextAndintToDivider()), itemCount: tabela[$length]})});
    }
  };
  (moedas.MoedasPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    moedas.MoedasPage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = moedas.MoedasPage.prototype;
  dart.addTypeTests(moedas.MoedasPage);
  dart.addTypeCaches(moedas.MoedasPage);
  dart.setMethodSignature(moedas.MoedasPage, () => ({
    __proto__: dart.getMethods(moedas.MoedasPage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(moedas.MoedasPage, I[1]);
  moeda_repo.MoedaRepo = class MoedaRepo extends core.Object {
    static ['_#new#tearOff']() {
      return new moeda_repo.MoedaRepo.new();
    }
  };
  (moeda_repo.MoedaRepo.new = function() {
    ;
  }).prototype = moeda_repo.MoedaRepo.prototype;
  dart.addTypeTests(moeda_repo.MoedaRepo);
  dart.addTypeCaches(moeda_repo.MoedaRepo);
  dart.setLibraryUri(moeda_repo.MoedaRepo, I[2]);
  dart.setStaticFieldSignature(moeda_repo.MoedaRepo, () => ['tabela']);
  dart.defineLazy(moeda_repo.MoedaRepo, {
    /*moeda_repo.MoedaRepo.tabela*/get tabela() {
      return T.JSArrayOfMoeda().of([new moeda.Moeda.new({icone: "1", nome: "Bitcoin", sigla: "BTC", preco: 160000}), new moeda.Moeda.new({icone: "2", nome: "Ethereum", sigla: "ETH", preco: 2000}), new moeda.Moeda.new({icone: "3", nome: "XRP", sigla: "XRP", preco: 20.02}), new moeda.Moeda.new({icone: "4", nome: "Cardano", sigla: "ADA", preco: 6.31}), new moeda.Moeda.new({icone: "4", nome: "USD Coin", sigla: "USDC", preco: 5.06}), new moeda.Moeda.new({icone: "6", nome: "Litecoin", sigla: "LTC", preco: 665.99})]);
    },
    set tabela(_) {}
  }, false);
  var __Moeda_icone = dart.privateName(moeda, "_#Moeda#icone");
  var __Moeda_nome = dart.privateName(moeda, "_#Moeda#nome");
  var __Moeda_sigla = dart.privateName(moeda, "_#Moeda#sigla");
  var __Moeda_preco = dart.privateName(moeda, "_#Moeda#preco");
  moeda.Moeda = class Moeda extends core.Object {
    get icone() {
      let t0;
      t0 = this[__Moeda_icone];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("icone")) : t0;
    }
    set icone(icone$35param) {
      this[__Moeda_icone] = icone$35param;
    }
    get nome() {
      let t0;
      t0 = this[__Moeda_nome];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("nome")) : t0;
    }
    set nome(nome$35param) {
      this[__Moeda_nome] = nome$35param;
    }
    get sigla() {
      let t0;
      t0 = this[__Moeda_sigla];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("sigla")) : t0;
    }
    set sigla(sigla$35param) {
      this[__Moeda_sigla] = sigla$35param;
    }
    get preco() {
      let t0;
      t0 = this[__Moeda_preco];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("preco")) : t0;
    }
    set preco(preco$35param) {
      this[__Moeda_preco] = preco$35param;
    }
    static ['_#new#tearOff'](opts) {
      let icone = opts && 'icone' in opts ? opts.icone : null;
      let nome = opts && 'nome' in opts ? opts.nome : null;
      let sigla = opts && 'sigla' in opts ? opts.sigla : null;
      let preco = opts && 'preco' in opts ? opts.preco : null;
      return new moeda.Moeda.new({icone: icone, nome: nome, sigla: sigla, preco: preco});
    }
  };
  (moeda.Moeda.new = function(opts) {
    let icone = opts && 'icone' in opts ? opts.icone : null;
    let nome = opts && 'nome' in opts ? opts.nome : null;
    let sigla = opts && 'sigla' in opts ? opts.sigla : null;
    let preco = opts && 'preco' in opts ? opts.preco : null;
    this[__Moeda_icone] = null;
    this[__Moeda_nome] = null;
    this[__Moeda_sigla] = null;
    this[__Moeda_preco] = null;
    this[__Moeda_icone] = icone;
    this[__Moeda_nome] = nome;
    this[__Moeda_sigla] = sigla;
    this[__Moeda_preco] = preco;
    ;
  }).prototype = moeda.Moeda.prototype;
  dart.addTypeTests(moeda.Moeda);
  dart.addTypeCaches(moeda.Moeda);
  dart.setGetterSignature(moeda.Moeda, () => ({
    __proto__: dart.getGetters(moeda.Moeda.__proto__),
    icone: core.String,
    nome: core.String,
    sigla: core.String,
    preco: core.double
  }));
  dart.setSetterSignature(moeda.Moeda, () => ({
    __proto__: dart.getSetters(moeda.Moeda.__proto__),
    icone: core.String,
    nome: core.String,
    sigla: core.String,
    preco: core.double
  }));
  dart.setLibraryUri(moeda.Moeda, I[3]);
  dart.setFieldSignature(moeda.Moeda, () => ({
    __proto__: dart.getFields(moeda.Moeda.__proto__),
    [__Moeda_icone]: dart.fieldType(dart.nullable(core.String)),
    [__Moeda_nome]: dart.fieldType(dart.nullable(core.String)),
    [__Moeda_sigla]: dart.fieldType(dart.nullable(core.String)),
    [__Moeda_preco]: dart.fieldType(dart.nullable(core.double))
  }));
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant,
    "file:///zapp/project/lib/pages/moedas.dart": moedas,
    "package:flutter_app/repositories/moeda_repo.dart": moeda_repo,
    "package:flutter_app/models/moeda.dart": moeda
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart","/zapp/project/lib/pages/moedas.dart","/zapp/project/lib/repositories/moeda_repo.dart","/zapp/project/lib/models/moeda.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;;;;;UC5C4B;AACxB,YAAO,iCACE,4CACqB,cACrB,yCACiB,8BAElB;IAEV;;;QAZoB;AAAd,+CAAc,GAAG;;EAAE;;;;;;;;;AAJT,IAAhB,eAAO;EACT;;ECEwB;;;;;;;;;;UCEI;AAClB,mBAAmB;AACV;AACf,YAAO,oCACK,+BACC,kBAAK,eAEC,iDACA,SAAc,SAAa,UAC/B,qCACI,kBAAM,GAAG,UACX,kBAAK,AAAM,AAAQ,MAAR,QAAC,KAAK,mBACd,kBAAK,AAAM,AAAQ,AAAM,MAAd,QAAC,KAAK,qEAGX,+BAAI,uBACN,SAAC,GAAE,QAAQ,wEAClB,AAAO,MAAD;IAGzB;;;QAvBwB;AAAlB,qDAAkB,GAAG;;EAAE;;;;;;;;;;;;;;;ECmC/B;;;;;;MAtCqB,2BAAM;YAAG,wBAC1B,4BACO,WACA,kBACC,cACA,UAEP,4BACM,WACA,mBACC,cACA,QAEP,4BACO,WACA,cACC,cACA,SAER,4BACO,WACA,kBACC,cACA,QAER,4BACO,WACA,mBACC,eACA,QAER,4BACO,WACA,mBACC,cACA;;;;;;;;;;;ACrCC;;IAAK;cAAL;;IAAK;;;AAAE;;IAAI;aAAJ;;IAAI;;;AAAE;;IAAK;cAAL;;IAAK;;;AAClB;;IAAK;cAAL;;IAAK;;;;;;;;;;QAGD;QACA;QACA;QACA;0BAPJ;yBAAO;0BAAM;0BACb;IAGI;IACA;IACA;IACA;;EACZ","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant,
    zapp__project__lib__pages__moedas: moedas,
    repositories__moeda_repo: moeda_repo,
    models__moeda: moeda
  };
}));

//# sourceMappingURL=main.js.map

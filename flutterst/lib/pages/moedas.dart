import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/material.dart';
import 'package:flutterst/repositories/moeda_repo.dart';
import 'package:flutterst/models/moeda.dart';
import 'package:intl/intl.dart';

class MoedasPage extends StatefulWidget {
  MoedasPage({Key? key}) : super(key: key);
  @override
  _MoedasPageState createState() => _MoedasPageState();
}

class _MoedasPageState extends State<MoedasPage> {
  List<Moeda> selecionadas = [];

  appBarDinamica() {
    if (selecionadas.isEmpty) {
      return AppBar(
        title: Text('beachCoin'),
      );
    } else {
      return AppBar(
        leading: IconButton(
          icon: Icon(Icons.close),
          onPressed: () {
            setState(() {
              selecionadas = [];
            });
          },
        ),
        title: Text('${selecionadas.length} selecionadas'),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final tabela = MoedaRepo.tabela;
    const IconData ico = IconData(0xe3f7, fontFamily: 'MaterialIcons');
    NumberFormat real = NumberFormat.currency(locale: 'pt_BR', name: 'R\$');
    return Scaffold(
        appBar: appBarDinamica(),
        body: ListView.separated(
          itemBuilder: (BuildContext context, int moeda) {
            return ListTile(
              shape: const RoundedRectangleBorder(
                borderRadius: BorderRadius.all(Radius.circular(12)),
              ),
              leading: (selecionadas.contains(tabela[moeda]))
                  ? const CircleAvatar(
                      child: Icon(
                        Icons.check,
                        size: 20,
                      ),
                    )
                  : const SizedBox(
                      width: 40,
                      child: Icon(
                        ico,
                        size: 35,
                      ),
                    ),
              title: Text(tabela[moeda].nome,
                  style: const TextStyle(
                    fontSize: 17,
                    fontWeight: FontWeight.w500,
                  )),
              trailing: Text(real.format(tabela[moeda].preco)),
              selected: selecionadas.contains(tabela[moeda]),
              selectedTileColor: Colors.indigo[50],
              onLongPress: () {
                setState(() {
                  // if ternario
                  (selecionadas.contains(tabela[moeda]))
                      ? selecionadas.remove(tabela[moeda])
                      : selecionadas.add(tabela[moeda]);
                });
              },
            );
          },
          padding: EdgeInsets.all(16),
          separatorBuilder: (_, ___) => Divider(),
          itemCount: tabela.length,
        ));
  }
}

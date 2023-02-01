import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/material.dart';
import 'package:flutterst/repositories/moeda_repo.dart';


class MoedasPage extends StatelessWidget {
  const MoedasPage({super.key});

  @override
  Widget build(BuildContext context) {
    final tabela = MoedaRepo.tabela;
    const IconData ico = IconData(0xe3f7, fontFamily: 'MaterialIcons');
    return Scaffold(
        appBar: AppBar(
          title: Text('°\$°'),
        ),
        body: ListView.separated(
          itemBuilder: (BuildContext context, int moeda) {
            return ListTile(
              leading: Icon (ico),
              title: Text(tabela[moeda].nome),
              trailing: Text(tabela[moeda].preco.toString()),
            );
          },
          padding: EdgeInsets.all(16),
          separatorBuilder: (_,___) => Divider(),
          itemCount: tabela.length,
          )
    );
  }
}
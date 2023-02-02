import 'package:flutter/material.dart';
import 'pages/moedas.dart';

void main() {
  runApp(MeuApp());
}

class MeuApp extends StatelessWidget {
  const MeuApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primarySwatch: Colors.indigo),
      title: "Bem-vindo(a)",
      debugShowCheckedModeBanner: false,
      home: MoedasPage(),
    );
  }
}

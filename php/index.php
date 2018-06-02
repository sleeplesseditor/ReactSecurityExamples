<!Doctype html>
<html>
    <h3>Vulnerable Input</h3>
    <form>
        <input type="text" name="field" />
        <input type="submit" />
        <h4>Result: <?= $_GET['field'] ?></h4>
    </form>
</html>